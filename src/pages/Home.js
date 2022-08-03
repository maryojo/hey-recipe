import React from 'react'
import Trending from '../components/Trending'
import Categories from '../components/Categories'
import background from '../images/background.jpg'

const Home = () => {
  return (
    <div>
      <div>
      <div className=''>
      <img src={background} alt="" className='h-full'/>
      </div>
      </div>
      <div className='mx-[10%]'>
      <Trending />
      <Categories name={'Carbs'} title={"Carbohydrate"}/>
      </div>
    </div>
  )
}

export default Home