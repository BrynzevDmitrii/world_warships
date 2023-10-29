import style from './Nations.module.scss'
 
 export const Nations = ({nations}) => {
    return ( <ol>
        <h3  className={style.title}>Нации</h3>
       {/* { nations.map((nation)=>{<li>{nation.name}</li>})} */}
        
    </ol> );
}
 
