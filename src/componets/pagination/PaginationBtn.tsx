import { FunctionComponent } from "react";
import style from './PaginationBtn.module.scss'

interface PaginationBtnProps {
    
}
 
export const PaginationBtn: FunctionComponent<PaginationBtnProps> = () => {
    
    return ( <button className={style.more}>Показать еще</button> );
}
 
