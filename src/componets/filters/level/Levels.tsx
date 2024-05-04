import { useState } from 'react';
import style from './Levels.module.scss'
import clsx from 'clsx';
import { useAppDispatch } from '../../../hook';
import { setFilterData, setIsActiveBtn } from '../redux/filterSlice';

export const Levels = (props: unknown[]) => {

    const [isOpen, setIsOpen] = useState(false)
    const dispatch =  useAppDispatch();
    const checketChange = (lvl: string) => {
        dispatch(setFilterData({typeFilter: 'level', data: lvl}));
        dispatch(setIsActiveBtn())
       }

    return (
        <ul className={style.list_wrapper}>
            <h3 onClick={()=>{setIsOpen(!isOpen)}} className={style.title}>Уровни</h3>

            {props.levels.map((lvl: number) =>
            (
                <li className={clsx(isOpen ? style.item : style.item__hidden) }>
                    <label htmlFor={lvl.toString()}>
                        <input 
                        type="checkbox" name="" 
                        id={lvl.toString()}  
                        onClick={() =>checketChange(lvl.toString()) }
                        />
                        <div className={style.castom__checbox}>
                        </div>
                        <p>
                            {lvl}
                        </p>

                    </label>

                </li>
            )
            )}

        </ul>);
}
