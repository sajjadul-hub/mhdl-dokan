import toast from 'react-hot-toast';
import { FaEye, FaStar } from 'react-icons/fa';



const Item = ({ delait, setTreatment }) => {
    const { details, title, img, price, rating, total_view
    } = delait;
    const handlerAdvertising=()=>{
        // console.log('loolo');
        const booking = {
            title,
            img,
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
                    setTreatment(null);
                    toast.success('product advertising confirmed')
                }
                else{
                    toast.error(data.message)
                }
            })
    }
    return (
        <div className="hero shadow-lg my-10">
            <div className="hero-content flex-col gap-7 lg:flex-row">
                <img src={img} className=" w-1/2 rounded-lg" alt='' />
                <div>
                    <h1 className="text-4xl font-bold">{title}</h1>
                    <p className="py-6">{details}</p>
                    <p className="py-2 font-bold text-xl">price: ${price}</p>
                    <div className='flex justify-between'>
                        <p className="py-6 flex font-semibold gap-1 text-lg"><FaStar className='text-2xl text-yellow-400'></FaStar>{rating.number}</p>
                        <p className="py-6 flex gap-1 text-lg font-semibold"><FaEye className='text-2xl text-purple-500'></FaEye>{total_view}</p>
                    </div>
                    <div className='flex justify-between'>
                        <label
                            onClick={() => setTreatment(delait)}
                            htmlFor="booking-model"
                            className="btn btn-primary text-white">Buy Now</label>
                        

                            <label onClick={handlerAdvertising}
                                className="btn btn-primary text-white">Click for Advertising</label>
                        

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;