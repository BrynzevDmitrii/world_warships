import { Submenu } from '../submenu/Submenu';
import style from './Levels.module.scss'
import { useState, useEffect } from 'react';

export const Levels = ({ levels }) => {
    const [arrayLvl, setArrayLvl] = useState([])

    useEffect(() => {

        const uniqLvl = []
        levels.map((l) => uniqLvl.push(l.level))
        setArrayLvl(Array.from(new Set(uniqLvl)).sort((a, b) => a - b));

    }, [levels])


    return (
    <ol className={style.list_wrapper}>
        <h3 className={style.title}>Уровни</h3>

        <Submenu  item = {arrayLvl}/>

    </ol>);
}