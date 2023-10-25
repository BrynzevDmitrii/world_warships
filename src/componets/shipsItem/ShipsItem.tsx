import { FunctionComponent } from "react";
import style from './style.module.scss'

interface ShipsItemProps {
    item: unknown;
}

export const ShipsItem: FunctionComponent<ShipsItemProps> = (props: ShipsItemProps) => {
    return (
        <li className={style.cart_wrapper}>
            <img className={style.ship_img} src={props.item.icons.medium} alt="ships_picteris" />
            <div className={style.ship_info}>
                <h3 className={style.title}>{props.item.title}</h3>
                <div className={style.lvl_block}>
                    <p className={style.lvl}>Lvl: {props.item.level}</p>
                    <p className={style.class_ship}>{props.item.type.name}</p>
                    <p className={style.nation}>{props.item.nation.name}
                        <span>

                            {props.item.nation.icons.large ?
                                (<img className={style.flag} src={props.item.nation.icons.large} alt="countres_flags" />) :

                                (<img className={style.flag} src={props.item.nation.icons.small} alt="countres_flags" />)
                            }

                        </span>
                    </p>
                </div>

                <span className={style.description}>
                    {props.item.description}
                </span>
            </div>

        </li>
    );
}
