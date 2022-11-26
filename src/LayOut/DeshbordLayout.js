import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Navbar from '../Pages/Shered/Navbar/Navbar';

const DeshbordLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email)
    const [isBuyer] = useBuyer(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <hr />
            <div className="drawer drawer-mobile mt-5">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content text-bold">
                        {
                            isBuyer && <li><Link className='text-2xl my-3 font-bold' to='/dashboard'>My Orders</Link></li>
                        }
                        {
                            isSeller &&
                            <>
                                <li><Link className='text-2xl my-3 font-bold' to='/dashboard'>My Orders</Link></li>
                                <li><Link className='text-2xl my-3 font-bold' to='/dashboard'>My Add products</Link></li>
                                <li><Link className='text-2xl font-bold my-3' to='/dashboard/adddoctor'>Start as a Seller</Link></li>
                            </>
                        }
                        {
                            isAdmin && <>
                                <li><Link className='text-2xl font-bold my-3' to='/dashboard/allusers'>All Buyers</Link></li>
                                <li><Link className='text-2xl font-bold my-3' to='/dashboard/managedoctors'>Manage Sellers</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DeshbordLayout;