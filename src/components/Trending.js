import React, { useEffect, useState } from 'react'
import MainCard from './MainCard';
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

const Trending = () => {
  
  const [trending, setTrending ] = useState([]);
  useEffect(() => {
    getTrending();
  }, []);

  const getTrending = async () =>{
    const check = localStorage.getItem('trending');

    if(check){
      setTrending(JSON.parse(check));
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_APIKEY}&number=10`);
      const data = await api.json();
      localStorage.setItem('trending', JSON.stringify(data.recipes));
      console.log(data);
      setTrending(data.recipes)
    }
  }
  return (
    <div className=''>
    <h2>Trending</h2>
    <Splide options={{
      perPage: 4,
      arrows: false,
      pagination: false,
      drag: 'free',
      gap: '1rem'
    }}>
      {trending.map((recipe) => {
        return(
          <SplideSlide key={recipe.id}>
          <MainCard id={recipe.id} title={recipe.title} imageURL={recipe.image}/>
          </SplideSlide>
     )})}
    </Splide>
    </div>
  )
}

export default Trending