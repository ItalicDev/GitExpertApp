import React from 'react'
import { useState } from 'react'


export const GitExpertApp = () => {
  
    const [categories, setcategories] = useState(["One Punch", "Dragon ball"])
    const addCategory = () => {
        setcategories([...categories, "Valorant"])
    } 
    return (
    <>
        <h1>Tittle</h1>
        <input></input>
        <button onClick={addCategory}>
            Add
        </button>
        <ol>
            {categories.map(cat => {
                return <li key={cat}>{cat}</li>
            })}
        </ol>
    </>
  )
}

