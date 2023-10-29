import { FunctionComponent, useEffect, useRef, useState } from "react";
import { ShipsItem } from "../shipsItem/ShipsItem";

import style from './style.module.scss'
import { PaginationBtn } from "../pagination/PaginationBtn";

interface ShipsListProps {
    data: []
    countPage: number
    setCountPage: (number: number)=>void
}
 
 export const ShipsList: FunctionComponent<ShipsListProps> = (props:ShipsListProps)=> {
    
    const [ships, setShips] = useState(props.data.slice(0,props.countPage * 8))

    const firstUpdate = useRef(true);

    const pageRef = useRef<HTMLDivElement>(null)


    useEffect(()=>{
        return setShips(props.data.slice(0,props.countPage * 8));
    }, [props.countPage, props.data])

    useEffect(()=>{
        if(!firstUpdate.current)  {
            pageRef.current?.scrollIntoView({
                behavior: "smooth",
            })          
          }
    },[ships])


    const handlerPagination= ()=>{
        props.setCountPage(props.countPage+1)
        firstUpdate.current = false
    }


    return ( <>
  
        <ul   className={style.list_wrapper}>         
            {
                ships.map((item, indx)=>(
                    <ShipsItem item = {item} key={indx} />
                ))
            }
             <div ref={pageRef} className={style.pagination_wrapper} onClick={()=>handlerPagination()} >
                    <PaginationBtn/>
            </div>
            
        </ul>
        
        </>

     );
}
 
