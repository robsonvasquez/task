import Style from "./style.module.css"

interface inputProps{
    type: string;
    placeholder: string;
    padding?: string;
    width?: string;
    height?: string;
}

export default function Input ({type, placeholder, padding, width, height}: inputProps){
    return(
        <input className={Style.input} style={{padding: padding, width: width, height: height}} type={type} placeholder={placeholder} />
    )
}