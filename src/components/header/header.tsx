import Style from './style.module.css'
import Img from '../../assets/logo.png'
import Input from '../input/input'

import {BsSearch, BsFillBagHeartFill} from 'react-icons/bs';
import Button from '../button/button';

export default function Header (){
    return(
        <header className={Style.header}>

            <div className={Style.logo}>
                <img src={Img} alt="Logo" />
                <span>Trendy Steps</span>
            </div>

            <div className={Style.input}>
                <span className={Style.search}> <BsSearch size='15'/> </span>
                <Input type='text' placeholder='Search' width='25rem' height='2.5rem' padding='4px 10px 4px 30px'/>
            </div>

            <div className={Style.button}>
                <Button name='Entrar' text='Entrar' color='#CCCCCC' padding='2px 15px'/>
                <span> <BsFillBagHeartFill size='30' color='#CCCCCC'/> </span>
            </div>
        </header>
    )
}