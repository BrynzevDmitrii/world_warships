import { FunctionComponent, useEffect, useState } from "react";

import style from './Filters.module.scss'
import { Class } from "./class/Class";
import { Levels } from "./level/Levels";
import { Nations } from './nation/Nations';

interface FiltersProps {
    data: []
}

export const Filters: FunctionComponent<FiltersProps> = (data) => {
    

    const [arrayLvl, setArrayLvl] = useState([])
    

    useEffect(() => {

        const uniqLvl= []
        data.data.map((l) => uniqLvl.push(l.level))
        setArrayLvl(Array.from(new Set(uniqLvl)).sort((a, b) => a - b));

    }, [])

    console.log(arrayLvl);
    
    

 
    return (
        <div className={style.filter_wrapper}>
            <div className={style.filter_header}>
                <button className={style.filter_btn}>Фильтр</button>
            </div>
        <ul className={style.filter_list}>
            <li><Class classes={undefined} /></li>
            <li><Levels levels={arrayLvl} /></li>
            <li><Nations nations={undefined} /></li>          
        </ul>
    </div>
    );
}

