import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [singUpError, setSignUpError] = useState('');
    const [createUserEmail, setCreateUserEmail] = useState('')
    const [token] = useToken(createUserEmail);
    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }
    
    const handleSignUp = (data) => {
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully.')
                const userInfo = {
                    displayName: data.name,
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            })

        const saveUser = (name, email) => {
            const role='seller'
            const user = { name, email,role};
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    setCreateUserEmail(email)
                })
        }

        // const saveUser = (name, email) => {
        //     const user = { name, email };
        //     fetch('http://localhost:5000/users', {
        //         method: 'POST',
        //         headers: {
        //             'content-type': 'application/json'
        //         },
        //         body: JSON.stringify(user)
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //             getUserToken(email);          
        //         })
        // }

    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 shadow-lg rounded-xl'>
                <h2 className='text-2xl font-semibold text-center mb-6'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)} >
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
                        <label className="label"><span className="label-text font-bold">Password</span> </label>
                        <input type='password' name='password' {...register('password'
                            , {
                                required: "password is required",
                                minLength: { value: 6, message: "password must be 6 characters or longer" }
                            }
                        )}
                            className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                        <label className="label"><span className="label-text">Fotget password</span> </label>
                    </div>
                    <input type="submit" className=' btn btn-primary  bg-gradient-to-r from-primary  to-secondary my-2 text-white w-full' value='Sign Up' />
                    <div>
                        {singUpError && <p className='text-red-600'>{singUpError}</p>}
                    </div>
                </form>
                <p className='font-bold text-center'>Already have an <Link to='/login' className='text-secondary'> account</Link></p>
               
            </div>
        </div>
    );
};

export default SignUp;