import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = ({handleOnClick, handleConnected}) => {

    

    return (
        <div className=" w3-bar w3-text-red">
            <NavLink onClick={handleConnected} to="/connect" className="w3-padding">Reconnect</NavLink>
            <NavLink onClick={handleOnClick} to="/query" activeStyle={{color: "black"}} className="w3-padding">Make a query or manipulate databases and tables</NavLink>        
            <NavLink to="/print" activeStyle={{color: "black"}} className="w3-padding">Print the content of selected database</NavLink>
            <NavLink to="/databases" activeStyle={{color: "black"}} className="w3-padding">List of databases</NavLink>
        </div>
    );
};

export default Header;