import { FunctionComponent, useEffect, useState } from "react";

import style from './Filters.module.scss'
import { Class } from "./class/Class";
import { Levels } from "./level/Levels";
import { Nations } from './nation/Nations';
import clsx from "clsx";
import { useAppSelector } from "../../hook";

interface FiltersProps {
    data: []
}

export const Filters: FunctionComponent<FiltersProps> = (data) => {
    const [isOpenList, setIsOpenList] = useState(false)

    const [arrayLvl, setArrayLvl] = useState([])
    const [arrayClass, setArrayClass] = useState([])
    const [arrayNations, setArrayNations] = useState([])

    const isCheketInput = useAppSelector(state => state.filter.isActiveBtnFilter)

    useEffect(() => {

        const uniqLvl= []
        data.data.map((l) => uniqLvl.push(l.level))
        setArrayLvl(Array.from(new Set(uniqLvl)).sort((a, b) => a - b));

        const uniqClass= []
        data.data.map((l) => uniqClass.push(l.type.name))
        setArrayClass(Array.from(new Set(uniqClass)).sort((a, b) => a - b));


        const uniqNation= []
        data.data.map((l) => uniqNation.push(l.nation.name))
        setArrayNations(Array.from(new Set(uniqNation)).sort((a, b) => a - b));
        
    }, [])

    
    

    
    return (
        <div className={style.filter_wrapper}>
            <div onClick={()=>setIsOpenList(!isOpenList)} className={style.filter_header}>
                <button className={style.filter_btn}>Фильтр</button>
                <button className={clsx(isCheketInput? style.apply_btn : style.apply_btn_hidden)}>Применить</button>
            </div>
        <div className={clsx(isOpenList ? style.filter_list : style.filter_list_hidden)}>
            <div className={clsx(isOpenList ?'' :style.opasity)}><Class classes={arrayClass} /></div>
            <div className={clsx(isOpenList ?'' :style.opasity)}><Levels levels={arrayLvl} /></div>
            <div className={clsx(isOpenList ?'' :style.opasity)}><Nations nations={arrayNations} /></div>          
        </div>
    </div>
    );
}

