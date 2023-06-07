import Style from './style.module.css'

interface filterProps{
    title: string;
}

export default function Filter ({title}: filterProps){
    return(
        <div className={Style.filter}>
            <details>
                <summary>
                    {title}
                </summary>
                <ul>
                    <li>Blusa</li>
                    <li>Calça</li>
                </ul>
            </details>
        </div>
    )
}