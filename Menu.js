import React from 'react';
import Menubar from './Menubar';

const Menu = () => {
    
    return (
        <div id='wrap'>
            <div className='gnb'>
            <Menubar name="Product"/>
        <Menubar name="Industried"/>
        <Menubar name="Resources"/>
        <Menubar name="Customers"/>
        <Menubar name="Partners"/>
        <Menubar name="Developers"/>
        <Menubar name="Events"/>
        <Menubar name="Company"/>
            </div>
        
        </div>
    );
}

export default Menu;