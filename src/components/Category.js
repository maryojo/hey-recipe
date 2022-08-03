import React, {useState, useEffect} from 'react'
import Card from './Card'

const Category = ({name}) => {
  const [category, setCategory ] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () =>{
    const check = localStorage.getItem(`${name}`);

    if(check){
      setCategory(JSON.parse(check));
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=${process.env.REACT_APP_APIKEY}&min${name}=10&max${name}=100&number=8`);
      const data = await api.json();
      localStorage.setItem(`${name}`, JSON.stringify(data));
      console.log(data);
      setCategory(data);
    }
    }
  
  return (
    <div className=''>
      <div className='grid grid-cols-4'>
        {category.map((recipe) => {
         return(
           <Card id={recipe.id} title={recipe.title} imageURL={recipe.image}/>
        )})}
    </div>
    </div>
  )
}

export default Category