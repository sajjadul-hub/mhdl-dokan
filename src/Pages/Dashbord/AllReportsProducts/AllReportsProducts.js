import React, { useEffect, useState } from 'react';

const AllReportsProducts = () => {
    const[reportedItems,setReportedItems]=useState('');
    useEffect(()=>{
        fetch('http://localhost:5000/reports')
        .then(res=>res.json())
        .then(data=>setReportedItems(data))
    },[])
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
                                <td><button className='btn btn-primary '>Delete</button></td>
                            </tr>)
                    }
                    {
                        // data.map()
                    }
                </tbody>
            </table>
        </div>

    </div>
    );
};

export default AllReportsProducts;<h2>here i am</h2>