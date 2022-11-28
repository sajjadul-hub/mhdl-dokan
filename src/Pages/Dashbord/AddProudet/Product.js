import React from 'react';
import toast from 'react-hot-toast';

const Product = ({item,setproducts}) => {
    const{specialty,image,condition,details,location,date,name,price,resalePrice}=item;
    const handlerAdvertising=()=>{
        const booking = {
           name,
           title:specialty,
           img:image,
            price,
            details,
            resalePrice,
            date,
            location,
        }
        //Todo: send data to the server
        //and once data is saved then close the model
        // and display success toast  
        fetch('https://tech-com-server.vercel.app/advertising', {
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
             <figure><img src={image} alt="" style={{height:'200px'}} className='w-full' /></figure>
            <div className="card-body">
            <h2 className=" text-center text-2xl font-bold">
                    {specialty}
                </h2>
             <div className='flex lg:gap-12 mb-5'>
                <h2 className='card-title'>
                <div className="badge badge-secondary">
                        <del>
                        ${price}
                        </del></div>
                    <div className="badge badge-secondary">${resalePrice}</div>
                </h2>
                <p className="bg-primary rounded-lg px-1"><b>condition:</b>{condition}</p>
              </div>
                <p>{details}</p>
                <div className="card-actions gap-3">
                
                    <div className='card-actions justify-between mt-5'>
                    <div className="badge badge-outline">{date}</div>
                    <div className="badge badge-outline font-bold ">{location}</div>
                    </div>
                </div>
                <label onClick={handlerAdvertising}
                                className="btn btn-primary text-white mt-4">Click for Advertising</label>
            </div> 
        </div>
    );
};

export default Product;