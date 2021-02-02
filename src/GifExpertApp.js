import React, { useState } from 'react';
import { AddCategorys } from './components/AddCategorys';
import { GifGrid } from './components/GifGrid';



export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Simpson']);
    // const handleAdd=()=>{
    //   const serieNueva="Supercampeones";
    //   setCategories([...categories,serieNueva]);
    // }

    return (
        <>
          <h2>GifExpertApp</h2>
          <AddCategorys setCategories={setCategories}/>
          <hr />
  
          <ol>
            {
              categories.map(category=>(
                  <GifGrid 
                  key={ category }
                  category={category}/>
                  

              ))
            }
          </ol>
        </> 
    );
};

