import { FunctionComponent, useEffect, useState } from "react";
import { ShipsItem } from "../shipsItem/ShipsItem";

import style from './style.module.scss'

interface ShipsListProps {
    data: []
    countPage: number
}
 
 export const ShipsList: FunctionComponent<ShipsListProps> = (props:ShipsListProps) => {
    
    const [ships, setShips] = useState(props.data.slice(0,props.countPage * 10))

    useEffect(()=>{
        return setShips(props.data.slice(0,props.countPage * 10));
    }, [props.countPage, props.data])


    return ( 
        <ul className={style.list_wrapper}>
           
            {
                ships.map((item, indx)=>(
                    <ShipsItem item = {item} key={indx} />
                ))
            }
            
        </ul>
     );
}
 
