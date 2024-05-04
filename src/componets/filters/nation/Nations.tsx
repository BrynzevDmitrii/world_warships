import clsx from 'clsx';
import { useState } from 'react';
import style from './Nations.module.scss'
import { useAppDispatch } from '../../../hook';
import { setFilterData, setIsActiveBtn } from '../redux/filterSlice';
 
 export const Nations = (props) => {
     const [isOpen, setIsOpen] = useState(false)
     const dispatch =  useAppDispatch();
     const checketChange = (nat: string) => {
        dispatch(setFilterData({typeFilter: 'nation', data: nat}));
        dispatch(setIsActiveBtn())
       }

    return (
        <ul className={style.list_wrapper}>
            <h3 onClick={()=>{setIsOpen(!isOpen)}} className={style.title}>Нации</h3>

            {props.nations.map((nation: string) =>
            (
                <li className={clsx(isOpen ? style.item : style.item__hidden) }>
                    <label htmlFor={nation.toString()}>
                        <input type="checkbox" 
                        name="" id={nation.toString()}
                        onClick={() =>checketChange(nation) } />
                        <div className={style.castom__checbox}>
                        </div>
                        <p>
                            {nation}
                        </p>

                    </label>

                </li>
            )
            )}

        </ul>);
}
