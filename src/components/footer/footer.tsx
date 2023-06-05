import Button from '../button/button'
import Style from './style.module.css'
import {TiSocialFacebook, TiSocialInstagram, TiSocialTwitter, TiSocialYoutube} from 'react-icons/ti'

export default function Footer (){
    return(
        <footer className={Style.footer}>
            <div className={Style.links}>
                <ul className={Style.ul}>
                    <h4>Intitucional</h4>
                    <li>Sobre Trendy Steps</li>
                    <li>Política de Privacidade</li>
                    <li>Trabalhe Conosco</li>
                    <li>Regulamentos</li>
                </ul>
                <ul className={Style.ul}>
                    <h4>Ajuda</h4>
                    <li>Trocas e devoluções</li>
                    <li>Entregas</li>
                    <li>Meus Pedidos</li>
                    <li>Minha Conta</li>
                </ul>
            </div>

            <div className={Style.central}>
                <h4>Central de Relacionamento</h4>
                <Button name='Central' text='TIRE SUAS DÚVIDAS' padding='2px 10px'/>
            </div>

            <div>
                <ul className={Style.social}>
                    <li><TiSocialFacebook/></li>
                    <li><TiSocialInstagram/></li>
                    <li><TiSocialTwitter/></li>
                    <li><TiSocialYoutube/></li>
                </ul>
            </div>

            <div className={Style.copyright}>
                <span>Copyright © 2023 Trendy Steps, TODOS OS DIREITOS RESERVADOS.</span>
            </div>
        </footer>
    )
}