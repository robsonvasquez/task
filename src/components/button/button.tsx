import { IconBaseProps } from "react-icons";

interface buttonProps{
    type?: any;
    text?: string;
    name: string;
    icon?: IconBaseProps;
    color?: string;
    padding?: string;
}

export default function Button ({type, text, name, icon, color, padding}: buttonProps){
    return(
        <button type={type} name={name} style={{padding: padding, color: color}}>
            {text}
            <>
                {icon}
            </>
        </button>
    )
}