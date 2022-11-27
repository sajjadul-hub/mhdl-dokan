import React from 'react';
import toast from 'react-hot-toast';

const Product = ({item,setproducts}) => {
    const{specialty,image,condition,details,location,date,name,price}=item;
    const handlerAdvertising=()=>{
        // console.log('loolo');
        const booking = {
           name,
           title:specialty,
           img:image,
            price,
            details,
        }
        //Todo: send data to the server
        //and once data is saved then close the model
        // and display success toast  
        fetch('http://localhost:5000/advertising', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('product advertising confirmed')
                }
                else{
                    toast.error(data.message)
                }
            })
    }
    return (
        <div className="card  bg-base-100 shadow-xl">
             <figure><img src={image} alt="" style={{height:'200px'}} /></figure>
            <div className="card-body">
             <div className='flex lg:gap-12'>
              <h2 className="card-title">
                    {specialty}
                    <div className="badge badge-secondary">${price}</div>
                </h2>
                <p className="bg-primary rounded-lg px-1"><b>condition:</b>{condition}</p>
              </div>
                <p>{details}</p>
                <div className="card-actions justify-end gap-3">
                
                    <div className='card-actions justify-between'>
                    <div className="badge badge-outline">{date}</div>
                    <div className="badge badge-outline font-bold">{location}</div>
                    </div>
                </div>
                <label onClick={handlerAdvertising}
                                className="btn btn-primary text-white">Click for Advertising</label>
            </div> 
        </div>
    );
};

export default Product;