import clsx from 'clsx';
import { useState } from 'react';
import style from './Class.module.scss'
import { useAppDispatch } from '../../../hook';
import { setIsActiveBtn, setFilterData } from '../redux/filterSlice';

export const Class = (props) => {
    const [isOpen, setIsOpen] = useState(false)
   const dispatch =  useAppDispatch();
   const checketChange = (clas: string) => {
    dispatch(setFilterData({typeFilter: 'class', data: clas}));
    dispatch(setIsActiveBtn())
   }

    return (
        <ul className={style.list_wrapper}>
            <h3 onClick={()=>{setIsOpen(!isOpen)}} className={style.title}>Классы</h3>

            {props.classes.map((clas: string) =>
            (
                <li className={clsx(isOpen ? style.item : style.item__hidden) }>
                    <label htmlFor={clas.toString()}>
                        <input 
                        type="checkbox" name="" 
                        id={clas.toString()} 
                        onClick={() =>checketChange(clas) } 
                        />
                        <div className={style.castom__checbox}>
                        </div>
                        <p>
                            {clas}
                        </p>

                    </label>

                </li>
            )
            )}

        </ul>);
}

