import { useQuery } from '@apollo/client'
import style from './App.module.scss'
import { ShipsList } from './componets/shipsList/ShipList'
import { All_SHIPS } from './apollo/ships'
import { useState } from 'react';
import { PaginationBtn } from './componets/pagination/PaginationBtn';
import { Levels } from './componets/filters/level/Levels';
import { Nations } from './componets/filters/nation/Nations';
import { Class } from './componets/filters/class/Class';


function App() {

  const [countPage, setCountPage] = useState(1);
 

  const { loading, error, data } = useQuery(All_SHIPS)

  if (loading) return <p>Loading</p>

  if (error) console.log(error);


  return (
    <>
      <div className={style.top} />
      <div className={style.content}>
        <h1 className={style.title}>
          All Ships
        </h1>
        <ul className={style.filter_wrapper}>
          <li><Levels levels={data.vehicles} /></li>
          <li><Nations nations={undefined} /></li>
          <li><Class classes={undefined} /></li>
        </ul>
 
            <ShipsList data={data.vehicles} countPage = {countPage} />
            <div className={style.pagination_wrapper} onClick={()=>setCountPage(countPage+1)}>
            <PaginationBtn />
            </div>

      </div>
    </>
  )
}

export default App
