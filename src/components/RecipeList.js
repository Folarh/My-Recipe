import React from 'react'
import { Link } from 'react-router-dom'
import { UseTheme } from '../hooks/UseTheme'
import "./RecipeList.css"
import DeleteIcon from '../assets/delete-icon.svg'
import { projectFirestore } from '../firebase/config'

export default function RecipeList({recipes}) {
  const {mode}=UseTheme()

  if (recipes.length===0){
    return <div className='error'>No recipes to load...</div>
  }

  const handleClick = (id)=>{
    projectFirestore.collection('recipes').doc(id).delete()
  }
  return (
    <div className='recipe-list'>
        {recipes.map(recipe=>(
        <div key={recipe.id} className={`card ${mode}`}>
         <h3>{recipe.title}</h3>  
         <p>{recipe.cookingTime} to make.</p>
         <div>{recipe.method.substring(0,100)}...</div>
         <Link to={`/recipes${recipe.id}`}>Cook this</Link>
         <img
         className='delete'
         src={DeleteIcon}
         alt='delete-icon'
         onClick={()=> handleClick(recipe.id)}
         
         />
            </div>
      ))}
      
    </div>
  )
}
