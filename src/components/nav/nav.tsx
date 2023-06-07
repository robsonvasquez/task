import { Link } from 'react-router-dom'
import Button from '../button/button'
import Style from './style.module.css'

export default function Navbar (){
    return(
        <nav>
            <ul className={Style.links}>
                <li className={Style.feminino}>
                    <Link to="Category">
                        <h4>FEMININO</h4>
                    </Link>
                    <div className={Style.links_feminino}>
                        <ul>
                            <li><h4>ROUPAS</h4></li>
                            <li><a>Blusas</a></li>
                            <li><a>Calças</a></li>
                            <li><a>Camisetas</a></li>
                            <li><a>Casacos</a></li>
                            <li><a>Moletons</a></li>
                            <li><a>Lingeris</a></li>
                            <li><a>Shorts</a></li>
                        </ul>
                        <ul>
                            <li><h4>CALÇADOS</h4></li>
                            <li><a>Blusas</a></li>
                            <li><a>Calças</a></li>
                            <li><a>Camisetas</a></li>
                            <li><a>Casacos</a></li>
                            <li><a>Moletons</a></li>
                            <li><a>Lingeris</a></li>
                            <li><a>Shorts</a></li>
                        </ul>
                        <ul>
                            <li><h4>ACESSÓRIOS</h4></li>
                            <li><a>Blusas</a></li>
                            <li><a>Calças</a></li>
                            <li><a>Camisetas</a></li>
                            <li><a>Casacos</a></li>
                            <li><a>Moletons</a></li>
                            <li><a>Lingeris</a></li>
                            <li><a>Shorts</a></li>
                        </ul>
                    </div>              
                </li>

                <li className={Style.masculino}>
                    <a href='#'>
                        <h4>MASCULINO</h4>
                    </a>

                    <div className={Style.links_masculino}>
                    <ul>
                            <li><h4>ROUPAS</h4></li>
                            <li><a>Blusas</a></li>
                            <li><a>Calças</a></li>
                            <li><a>Camisetas</a></li>
                            <li><a>Casacos</a></li>
                            <li><a>Moletons</a></li>
                            <li><a>Lingeris</a></li>
                            <li><a>Shorts</a></li>
                        </ul>
                        <ul>
                            <li><h4>CALÇADOS</h4></li>
                            <li><a>Blusas</a></li>
                            <li><a>Calças</a></li>
                            <li><a>Camisetas</a></li>
                            <li><a>Casacos</a></li>
                            <li><a>Moletons</a></li>
                            <li><a>Lingeris</a></li>
                            <li><a>Shorts</a></li>
                        </ul>
                        <ul>
                            <li><h4>ACESSÓRIOS</h4></li>
                            <li><a>Blusas</a></li>
                            <li><a>Calças</a></li>
                            <li><a>Camisetas</a></li>
                            <li><a>Casacos</a></li>
                            <li><a>Moletons</a></li>
                            <li><a>Lingeris</a></li>
                            <li><a>Shorts</a></li>
                        </ul>
                    </div>
                </li>

                <li className={Style.infantil}>
                    <a href='#'>
                        <h4>INFANTIL</h4>
                    </a>

                    <div className={Style.links_infantil}>
                        <ul>
                            <li><h4>ROUPAS</h4></li>
                            <li><a>Blusas</a></li>
                            <li><a>Calças</a></li>
                            <li><a>Camisetas</a></li>
                            <li><a>Casacos</a></li>
                            <li><a>Moletons</a></li>
                            <li><a>Lingeris</a></li>
                            <li><a>Shorts</a></li>
                        </ul>
                        <ul>
                            <li><h4>CALÇADOS</h4></li>
                            <li><a>Blusas</a></li>
                            <li><a>Calças</a></li>
                            <li><a>Camisetas</a></li>
                            <li><a>Casacos</a></li>
                            <li><a>Moletons</a></li>
                            <li><a>Lingeris</a></li>
                            <li><a>Shorts</a></li>
                        </ul>
                        <ul>
                            <li><h4>ACESSÓRIOS</h4></li>
                            <li><a>Blusas</a></li>
                            <li><a>Calças</a></li>
                            <li><a>Camisetas</a></li>
                            <li><a>Casacos</a></li>
                            <li><a>Moletons</a></li>
                            <li><a>Lingeris</a></li>
                            <li><a>Shorts</a></li>
                        </ul>
                    </div>
                </li>

                <li className={Style.marcas}>
                    <a href='#'>
                        <h4>MARCAS</h4>
                    </a>

                    <div className={Style.links_marcas}>
                        <ul>
                                <li><h4>ROUPAS</h4></li>
                                <li><a>Lacoste</a></li>
                                <li><a>Adidas</a></li>
                                <li><a>Nike</a></li>
                                <li><a>BadBoy</a></li>
                            </ul>
                            <ul>
                                <li><h4>CALÇADOS</h4></li>
                                <li><a>Fila</a></li>
                                <li><a>Nike</a></li>
                                <li><a>Adidas</a></li>
                                <li><a>Mizuno</a></li>
                                <li><a>Vans</a></li>
                                <li><a>Ascis</a></li>
                                <li><a>Olympikus</a></li>
                            </ul>
                    </div>
                </li>

                <li className={Style.outlet}>
                    <a href='#'>
                        <h4>OUTLET</h4>
                    </a>

                    <div className={Style.links_outlet}>
                        <ul>
                            <li><h4>ROUPAS</h4></li>
                            <li><a>Blusas</a></li>
                            <li><a>Calças</a></li>
                            <li><a>Camisetas</a></li>
                            <li><a>Casacos</a></li>
                            <li><a>Moletons</a></li>
                            <li><a>Lingeris</a></li>
                            <li><a>Shorts</a></li>
                        </ul>
                        <ul>
                            <li><h4>CALÇADOS</h4></li>
                            <li><a>Blusas</a></li>
                            <li><a>Calças</a></li>
                            <li><a>Camisetas</a></li>
                            <li><a>Casacos</a></li>
                            <li><a>Moletons</a></li>
                            <li><a>Lingeris</a></li>
                            <li><a>Shorts</a></li>
                        </ul>
                        <ul>
                            <li><h4>ACESSÓRIOS</h4></li>
                            <li><a>Blusas</a></li>
                            <li><a>Calças</a></li>
                            <li><a>Camisetas</a></li>
                            <li><a>Casacos</a></li>
                            <li><a>Moletons</a></li>
                            <li><a>Lingeris</a></li>
                            <li><a>Shorts</a></li>
                        </ul>
                    </div>
                </li>

                <li className={Style.mobile}>
                    <Button name='Entrar' text='Entrar' color='#333333' padding='2px 15px'/>
                </li>
            </ul>
        </nav>
    )
}