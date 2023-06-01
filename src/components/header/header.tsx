import Style from './style.module.css'
import Img from '../../assets/logo.png'

export default function Header (){
    return(
        <section className={Style.header}>
            <img src={Img} alt="Logo" />
        </section>
    )
}