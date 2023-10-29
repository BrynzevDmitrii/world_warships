import style from './Class.module.scss'

export const Class = ({classes}) => {
    return ( <ol>
        <h3 className={style.title}>Классы</h3>

        <div className={style.nav_classes}>
        {/* { classes.map((classShip)=><li>{classShip.name}</li>)} */}
        </div>
       
        
    </ol> );
}