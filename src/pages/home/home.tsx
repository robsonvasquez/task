import Style from './style.module.css'
import Slider from "../../components/slide/slide";

import promo1 from '../../assets/promo1.webp'

export default function Home (){
    return(
        <>
            <Slider/>

            <section className={Style.promo}>
                
                <h1>OFERTAS</h1>

                <div className={Style.promo_card}>
                    <div className={Style.card}>
                        <img src={promo1} alt="" />
                    </div>

                    <div className={Style.card}>
                        <img src={promo1} alt="" />
                    </div>

                    <div className={Style.card}>
                        <img src={promo1} alt="" />
                    </div>
                </div>

            </section>
        </>
    )
}