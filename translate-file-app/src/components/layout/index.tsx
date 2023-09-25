import React from 'react';
import Header from '../Header';

type LayoutProps = {children ?: React.ReactNode};

const LogLayout = (children  : LayoutProps) => {
    return (
        <div className='flex flex-col'>
            <Header />

        </div>
    );
};

export default LogLayout;