import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
const AllReportsProducts = () => {
    const[reportedItems,setReportedItems]=useState('');
    const{user}=useContext(AuthContext);
    useEffect(()=>{
        fetch('https://tech-com-server.vercel.app/reports')
        .then(res=>res.json())
        .then(data=>setReportedItems(data))
    },[])


    const handleDeleteBuyers = user => {
        fetch(`https://tech-com-server.vercel.app/reports/${user._id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                toast.success(`Reported product ${user?.laptopName} deleted successfully`)
                setReportedItems('');
            }
        })
    }
    return (
        <div>
        <h3 className='text-4xl mb-5 text-center font-bold '>All Reported Product :{reportedItems.length}</h3>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Laptop Name</th>
                        <th>Price</th>
                        <th>Delect</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reportedItems &&
                        reportedItems.map((reportedItems, i) =>
                            <tr key={reportedItems._id}>
                                <th>{i + 1}</th>
                                <td>{reportedItems.buyerName}</td>
                                <td>{reportedItems.laptopName}</td>
                                <td>${reportedItems.price}</td>
                                <td>{ user?.role !== 'admin'&&<button onClick={() => handleDeleteBuyers(reportedItems)} className='btn btn-xs btn-danger'>Delete</button>}</td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>

    </div>
    );
};

export default AllReportsProducts;<h2>here i am</h2>