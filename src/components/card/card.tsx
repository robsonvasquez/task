import Style from './style.module.css'
import img from '../../assets/card-img.webp'

export default function Card (){
    return(
        <div className={Style.card}>
            <div className={Style.card_img}>
                <img src={img} alt="" />
            </div>
            <div className={Style.card_description}>
                <h4>Vestido Curto Pregas Guess</h4>
                <span>R$ 100,00</span>
            </div>
        </div>
    )
}