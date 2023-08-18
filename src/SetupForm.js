import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext()
  return (
    <main>
      <section className='quiz quiz-small'>
        <form className='setup-form'>
          <h2>Let's Attempt Quiz</h2>
          {/* amount */}
          <div className='form-control'>
            <label htmlFor='amount'>number of questions</label>
            <input
              type='number'
              name='amount'
              id='amount'
              value={quiz.amount}
              onChange={handleChange}
              className='form-input'
              min={1}
              max={10}

            />
          </div>
          {/* category */}

          <div className='form-control'>
            <label htmlFor='category'>category</label>
            <select
              name='category'
              id='category'
              className='form-input'
              value={quiz.category}
              onChange={handleChange}
            >
              <option value='sports'>Sports</option>
<option value='history'>History</option>
<option value='politics'>Politics</option>
<option value='science'>Science</option>
<option value='computers'>Computers</option>
<option value='anime'>Anime & Manga</option>
<option value='mythology'>Mythology</option>
<option value='generalKnowledge'>General Knowledge</option>
<option value='books'>Books</option>
<option value='film'>Film</option>
<option value='music'>Music</option>
<option value='theater'>Theater</option>
<option value='television'>Television</option>
<option value='videoGames'>Video Games</option>
<option value='boardGames'>Board Games</option>
<option value='mathematics'>Mathematics</option>
<option value='geography'>Geography</option>
<option value='art'>Art</option>
<option value='celebrities'>Celebrities</option>
<option value='animals'>Animals</option>
<option value='vehicles'>Vehicles</option>
<option value='comics'>Comics</option>
<option value='gadgets'>Gadgets</option>
<option value='cartoons'>Cartoons</option>
            </select>
          </div>
          {/* difficulty */}

          <div className='form-control'>
            <label htmlFor='difficulty'>select difficulty</label>
            <select
              name='difficulty'
              id='difficulty'
              className='form-input'
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value='easy'>easy</option>
              <option value='medium'>medium</option>
              <option value='hard'>hard</option>
            </select>
          </div>
          {error && (
            <p className='error'>
              can't generate questions, please try different options
            </p>
          )}
          <button type='submit' onClick={handleSubmit} className='submit-btn'>
            start
          </button>
          {/* <button onClick={handleExitGame} className="exit-btn">Exit</button> */}

        </form>
      </section>
    </main>
  )
}

export default SetupForm
