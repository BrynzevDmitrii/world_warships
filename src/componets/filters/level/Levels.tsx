import { useState } from 'react';
import style from './Levels.module.scss'
import clsx from 'clsx';
interface FiltersProps {

}

export const Levels = (props: unknown[]) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <ul className={style.list_wrapper}>
            <h3 onClick={()=>{setIsOpen(!isOpen)}} className={style.title}>Уровни</h3>

            {props.levels.map((lvl: number) =>
            (
                <li className={clsx(isOpen ? style.item : style.item__hidden) }>
                    <label htmlFor={lvl.toString()}>
                        <input type="checkbox" name="" id={lvl.toString()} />
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