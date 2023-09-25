import React from 'react';
import Header from '../Header';
import Log from '../Log';

type LayoutProps = {children ?: React.ReactNode};

const LogLayout = (children  : LayoutProps) => {
    return (
        <div className='flex flex-col'>
            <Header>
                <Log page='Login' />
            </Header>
            
        </div>
    );
};

export default LogLayout;