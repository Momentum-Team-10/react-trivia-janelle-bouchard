import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

export const App = () => {
  // const categories = ["vehicles", "Entertainment: Music", "Geography"]
  const [categories, setCategories] = useState([]) 
  
  useEffect(() => {
    console.log('USE EFFECT IS RUNNING')
    //AJAX request:
    axios
        .get('https://opentdb.com/api.php?amount=10')
        .then((response) => {
          const results = response.data.results
          console.log(results)
          for (let result of results) {
            console.log(result.category)
          }
          setCategories(results.map((resultsObj) => resultsObj.category))
        })
  }, [])
  console.log(categories)
  return (
    <>
      <h1>Category List</h1>
      {categories}
    </>
  )
}


export { App as default }