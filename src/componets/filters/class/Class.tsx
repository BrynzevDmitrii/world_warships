import clsx from 'clsx';
import { useState } from 'react';
import style from './Class.module.scss'

export const Class = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <ul className={style.list_wrapper}>
            <h3 onClick={()=>{setIsOpen(!isOpen)}} className={style.title}>Классы</h3>

            {props.classes.map((clas: number) =>
            (
                <li className={clsx(isOpen ? style.item : style.item__hidden) }>
                    <label htmlFor={clas.toString()}>
                        <input type="checkbox" name="" id={clas.toString()} />
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