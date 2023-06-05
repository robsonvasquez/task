import {Outlet} from "react-router-dom"

export default function Main (){
    return(
        <main style={{padding: "2px 5px"}}>
            <Outlet/>
        </main>
    )
}