import React from 'react';
import { Outlet } from 'react-router';
import Aside from '../components/Aside/Aside';

const DashboardLayout = () => {
    return (
        <div className='flex gap-10'>
            <div>
                <Aside></Aside>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;