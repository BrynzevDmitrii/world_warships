import clsx from 'clsx';
import { useState } from 'react';
import style from './Nations.module.scss'
 
 export const Nations = (props) => {
     const [isOpen, setIsOpen] = useState(false)

    return (
        <ul className={style.list_wrapper}>
            <h3 onClick={()=>{setIsOpen(!isOpen)}} className={style.title}>Нации</h3>

            {props.nations.map((nation: number) =>
            (
                <li className={clsx(isOpen ? style.item : style.item__hidden) }>
                    <label htmlFor={nation.toString()}>
                        <input type="checkbox" name="" id={nation.toString()} />
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
 
