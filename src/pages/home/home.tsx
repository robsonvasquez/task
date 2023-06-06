import Style from './style.module.css'
import Slider from "../../components/slide/slide";

import promo1 from '../../assets/promo1.webp'
import promo2 from '../../assets/promo2.webp'
import promo3 from '../../assets/promo3.webp'
import nike from '../../assets/nike.png'
import adidas from '../../assets/adidas.png'
import colcci from '../../assets/colcci.png'
import armani from '../../assets/armani.png'
import deg from '../../assets/deg.png'

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
                        <img src={promo2} alt="" />
                    </div>

                    <div className={Style.card}>
                        <img src={promo3} alt="" />
                    </div>
                </div>

            </section>

            <section className={Style.marcas}>

                <h3>MARCAS MAIS VENDIDAS</h3>

                <div className={Style.marcas_card}>           
                    <div>
                        <img src={nike} alt="" />
                    </div>

                    <div>
                        <img src={adidas} alt="" />
                    </div>
                    
                    <div>
                        <img src={colcci} alt="" />
                    </div>

                    <div>
                        <img src={armani} alt="" />
                    </div>

                    <div>
                        <img src={deg} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}