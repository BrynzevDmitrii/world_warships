import { useQuery } from '@apollo/client'
import style from './App.module.scss'
import { ShipsList } from './componets/shipsList/ShipList'
import { All_SHIPS } from './apollo/ships'
import { useState } from 'react';
import { Filters } from './componets/filters/Filters';


function App() {

  const [countPage, setCountPage] = useState(1);

const pagination = (count:number):void  =>  {
  setCountPage(count)
}

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
        <Filters  data={data.vehicles}/>
          <div>
          <ShipsList data={data.vehicles} setCountPage ={ pagination} countPage={countPage} />
          </div>
            
              
      </div>
     
    </>
  )
}

export default App
