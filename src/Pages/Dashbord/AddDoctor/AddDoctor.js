import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shered/Loading/Loading';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbbkey;
    const navigate = useNavigate();
    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://tech-com-server.vercel.app/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })


    const handleAddDoctor = data => {

     const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
      .then(res=>res.json())
      .then(imgData=>{
        if(imgData.success){
            console.log(imgData.data.url);
            const doctor = {
                name: data.name, 
                email: data.email,
                specialty: data.specialty,
                image: imgData.data.url
            }
         
              // save doctor information to the database
              fetch('https://tech-com-server.vercel.app/doctors', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json', 
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(doctor)
            })
            .then(res => res.json())
            .then(result =>{
                toast.success(`${data.name} ,you are seller now`);
                navigate('/dashboard')
            })
       }
    })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='flex flex-row justify-center mt-8'>
            <div className='w-96 p-7 shadow-lg rounded-xl'>
            <h2 className='text-3xl font-bold'>Start as a Seller</h2>
                <form onSubmit={handleSubmit(handleAddDoctor)} >
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text font-bold">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text font-bold">Email</span> </label>
                        <input type='text' name='email' {...register('email', { required: "email is required" })}
                            className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text font-bold">Selling Product</span> </label>
                        <select
                            {...register('specialty', { required: "specialty is required" })}
                            className="select input-bordered w-full">
                            {
                                specialties.map(specialty => <option
                                    key={specialty._id}
                                    value={specialty.name}
                                >{specialty.name}</option>)
                            }

                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text font-bold">Upload photo</span></label>
                        <input type="file" {...register("image", {
                            required: "photo is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                    </div>
                    <input type="submit" className='btn btn-primary  bg-gradient-to-r from-primary  to-secondary text-white w-full mt-4' value='Add' />
                    <div>

                    </div>
                </form>
            </div>
        </div>
    );
};
/*
*Three places to store images
*1.Thrid party images hosting server 
*2.File system of your server
*3.Mongodbh (database)
**/
export default AddDoctor;