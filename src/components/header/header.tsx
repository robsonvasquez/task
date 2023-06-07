import Style from './style.module.css'
import Img from '../../assets/logo.png'
import Input from '../input/input'

import {BsSearch, BsFillBagFill} from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi';
import Button from '../button/button';
import Navbar from '../nav/nav';
import { useState } from 'react';
import Car from '../car/car';
import { Link } from 'react-router-dom';

export default function Header (){

    const width = window.innerWidth;

    const[active, setActive] = useState(false);

    function toggle_menu(){
        setActive(!active);
    }

    return(
            <>
                <header className={Style.header}>

                    <button className={Style.hamburger} title='Menu' onClick={toggle_menu}> 
                        <GiHamburgerMenu size='30' color='#FFF'/>
                    </button>

                    <div className={Style.logo}>
                        <Link to="/">
                            <img src={Img} alt="Logo" />
                            <h3>Trendy Steps</h3>
                        </Link>
                    </div>

                    <div className={Style.input}>
                        {width < 750 ? <Input type='text' placeholder='Search' width={width-30+"px"} height='2.5rem' padding='4px 10px 4px 10px'/> : <Input type='text' placeholder='Search' width='28rem' height='2.5rem' padding='4px 10px 4px 10px'/>}
                        <span className={Style.search}> <BsSearch size='15'/> </span>
                    </div>

                    <div className={Style.button}>
                        <div className={Style.bag_car}>
                            <span className={Style.bag} title='Sacola'> <BsFillBagFill/> </span>
                            <div className={Style.car}>
                                <Car/>
                            </div>
                        </div>
                        
                        <div className={Style.mobile}>
                            <Button name='Entrar' text='Entrar' color='#333333' padding='2px 15px'/>
                        </div>
                    </div>

                    <div className={active ? Style.mobile_open : Style.mobile}> 
                        <Navbar/> 
                    </div>
                    
                </header>

            </>
    )
}