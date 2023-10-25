import { useQuery } from '@apollo/client'
import style from './App.module.scss'
import { ShipsList } from './componets/shipsList/ShipList'
import { All_SHIPS } from './apollo/ships'
import { useState } from 'react';
import { PaginationBtn } from './componets/pagination/PaginationBtn';


function App() {

  const [countPage, setCountPage] = useState(1);
 

  const { loading, error, data } = useQuery(All_SHIPS)




  if (loading) return <p>Loading</p>

  if (error) console.log(error);

  console.log(data);


  return (
    <>
      <div className={style.top} />
      <div className={style.content}>
        <h1 className={style.title}>
          All Ships
        </h1>
        <ul className={style.filter_wrapper}>
          <li>Уровень</li>
          <li>Нация</li>
          <li>Класс</li>
        </ul>
 
            <ShipsList data={data.vehicles} countPage = {countPage} />
            <div className='pagination_wrapper' onClick={()=>setCountPage(countPage+1)}>
            <PaginationBtn />
            </div>

      </div>
    </>
  )
}

export default App
