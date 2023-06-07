import Style from './style.module.css'
import blusa from '../../assets/blusa.jpeg'

import {AiOutlineMinusCircle, AiOutlinePlusCircle} from 'react-icons/ai'

export default function Car (){
    return(
        <div className={Style.car}>
            <div className={Style.title}>
                <h4>SACOLA</h4>
            </div>

            <div className={Style.itens}>
                <div className={Style.item}>
                    <img src={blusa} alt="" />

                    <div className={Style.item_qnt}>
                        <span><AiOutlineMinusCircle size='20'/></span>
                        <span>2</span>
                        <span><AiOutlinePlusCircle size='20'/></span>
                    </div>
                </div>

                <div className={Style.item}>
                    <img src={blusa} alt="" />

                    <div className={Style.item_qnt}>
                        <span><AiOutlineMinusCircle size='20'/></span>
                        <span>1</span>
                        <span><AiOutlinePlusCircle size='20'/></span>
                    </div>
                </div>

                <div className={Style.item}>
                    <img src={blusa} alt="" />

                    <div className={Style.item_qnt}>
                        <span><AiOutlineMinusCircle size='20'/></span>
                        <span>2</span>
                        <span><AiOutlinePlusCircle size='20'/></span>
                    </div>
                </div>

                <div className={Style.item}>
                    <img src={blusa} alt="" />

                    <div className={Style.item_qnt}>
                        <span><AiOutlineMinusCircle size='20'/></span>
                        <span>3</span>
                        <span><AiOutlinePlusCircle size='20'/></span>
                    </div>
                </div>
            </div>

            <div className={Style.price}>
                <span>Total:</span>
                <span>R$ 100,00</span>
            </div>
        </div>
    )
}