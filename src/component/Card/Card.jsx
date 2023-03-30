import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import SingleData from '../Single/SingleData';

const Card = () => {
    const [data, setdata] = useState([])
    const [showAll, setShowAll]= useState(false)
    const [uniqueId, setUniqueId] = useState(null)
    const [singleData, setSingleData] = useState({})
// console.log(uniqueId)
    const handleShowAll=()=>{
        setShowAll(true)
    }
    const handleSort =()=>{
        const sortDate = data.sort((a, b)=>{
            return new Date(a.published_in)- new Date(b.published_in)
        });
        setdata([...data, sortDate])
    }

    useEffect(()=>{
        fetch(` https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
        .then(res=> res.json())
        .then(data=> setSingleData(data.data))
    },[uniqueId])

    useEffect(()=>{
        const loadData= async()=>{
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`)
            const data = await res.json();
            setdata(data.data.tools)
        }
        loadData()
    },[])
// console.log(singleData)
    return (
        
       <div>
        <span onClick={handleSort}>
        <Button>sort by date</Button></span>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-5  gap-5'>
            
            {/* <SingleData></SingleData> */}
            {
             data.slice(0, showAll ? 12: 6).map((singleData)=> {
                 // console.log(singleData)
                 return (
                     <SingleData singleData={singleData} key={singleData.id} setUniqueId={setUniqueId}></SingleData>
                 )
             })
            }
            {!showAll && (<span onClick={handleShowAll}>
            <Button>see more</Button>
            </span>)}
            <Modal singleData={singleData}></Modal>
         </div>
       </div>
    );
};

export default Card;