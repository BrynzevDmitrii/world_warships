import style from './Levels.module.scss'
interface FiltersProps {
   
}

export const Levels = ( props ) => {

    return (
    <ol className={style.list_wrapper}>
        <h3 className={style.title}>Уровни</h3>

        {props.levels}

    </ol>);
}