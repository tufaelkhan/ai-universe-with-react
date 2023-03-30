import React from 'react';

const Modal = (props) => {
    // console.log(props.singleData)
const {image_link,description, integrations,features} = props.singleData;
// console.log(Object.values(features || {}))
console.log(integrations)
    return (
        <div>
    <input type="checkbox" id="my-modal-5" className="modal-toggle" />
<div className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
  <div className="card lg:card-side bg-base-100 shadow-xl">
  <div className="card-body border-2 border-error m-8">
    <h2 className="card-title">{description ? description: 'data not found'}</h2>
 <div className='flex justify-between'>
 <div>
        <h1 className='font-bold text-3xl'>Features</h1>
        {
        Object.values(features|| {}).map((value)=> (<p>{value.feature_name}</p>))
        }
    </div>
    <div>
        <h1 className='font-bold text-3xl'>Integrations</h1>
     {
        integrations && integrations.map((integration) => {
            return <p>{integration? integration: 'data not found'}</p>
        })
     }
    </div>
 </div>
  </div>
  <div><figure><img className='w-full h-64
  ' src={image_link ? image_link[0] : null} alt="Album"/></figure></div>
</div>
    <div className="modal-action">
      <label htmlFor="my-modal-5" className="btn">Yay!</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default Modal;