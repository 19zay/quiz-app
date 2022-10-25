import React from 'react'
import useAxios from "../components/useAxios"


const QuizPage = () => {

  let apiUrl = `/api.php?amount=10`

  const { response, loading } = useAxios({ url: apiUrl })
  return (
    <div className="app">
      <div className="home-div">
        <h1 className='question-title'>Question 1</h1>
        <h1 className='question'>Whats the answer to this question that i just asked you</h1>

        <div className='options-container'>
        <button className='options'>Option 1</button>
        <button className='options'>Option 2</button>
        <button className='options'>Option 3</button>
        <button className='options'>Option 4</button>
        </div>

        <div>
          <p className='score'>
            Score: 2/6
          </p>
        </div>
      </div>
    </div>
  )
}

export default QuizPage