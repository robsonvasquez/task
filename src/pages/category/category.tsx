import Style from "./style.module.css"
import Card from "../../components/card/card";
import Filter from "../../components/filter/filter";
import {BsFilterLeft} from "react-icons/bs"
import { useState } from "react";

export default function Category (){

    const[active, setActive] = useState(false);

    function toggle_menu(){
        setActive(!active);
    }

    return(
        <section className={Style.category}>

            <div className={Style.filter_mobile}>
                <span onClick={toggle_menu}>Filtros <BsFilterLeft size="25"/> </span>
            </div>

            <div className={active ? Style.mobile_filter : Style.filter}>
                <Filter title="GÊNERO"/>
                <Filter title="COR"/>
                <Filter title="CATEGORIA"/>
                <Filter title="TAMANHOS"/>
                <Filter title="MARCA"/>
                <Filter title="VENDIDO POR"/>
                <Filter title="CINTURA"/>
                <Filter title="ESTAÇÃO"/>
                <Filter title="TECIDO"/>
            </div>

            <div className={Style.card}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>            
        </section>
    )
}