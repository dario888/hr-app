import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import {Fragment} from 'react';
import ScrollToTop from './ScrollToTop';




const Navbar = () => {
    const [show, setShow] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    // console.log(show);
    // console.log('Prev State', prevScrollPos);
 

    const handleScroll = () => {
        // find current scroll position
        const currentScrollPos = window.pageYOffset;
        // console.log('Current State ', currentScrollPos);
        
        // set state based on location info  // && prevScrollPos - currentScrollPos > 50
        setShow((prevScrollPos > currentScrollPos ) || currentScrollPos <= 10);
        // console.log('Deffer ', prevScrollPos - currentScrollPos);
        
        // set new scroll position to previus position
        setPrevScrollPos(currentScrollPos);
    }
 
    useEffect(() => {
        // Event Lstener to use handleScroll
        window.addEventListener('scroll', handleScroll);
        //ComponentDidUnmount removing listener
        return () => window.removeEventListener('scroll', handleScroll);

        //eslint-disable-next-line  
    }, [prevScrollPos])



    return (
        <Fragment > 
        <div className={`navbar ${!show ? 'hideNav' : null}`}>
            <div className="logo">HR</div>
            <div className="divUl">
                <ul className="navItems">
                    <li><NavLink exact to="/">Home</NavLink ></li>
                    <li><NavLink  exact to="/employees">Employees</NavLink ></li>
                    <li><NavLink  exact to="/analytics">Analytics</NavLink ></li>
                    <li><NavLink  exact to="/logIn">Log In</NavLink ></li>
                    <li><NavLink  exact to="/logIn">Sing In</NavLink ></li>
                </ul>
            </div> 
        </div>
        <ScrollToTop scrollPos={prevScrollPos} />
        </Fragment>
    )
}

export default Navbar
