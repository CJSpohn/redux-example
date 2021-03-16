import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addIdea } from '../actions'

import './App.css';

const App = () => {
  const allIdeas = useSelector(state => state.ideaReducer)
  const dispatch = useDispatch();
  const [idea, setIdea] = useState('');

  const submitIdea = () => {
    dispatch(addIdea(idea))
    setIdea('')
  }

  return (
    <section className="display">
      <h1>Redux IdeaBox</h1>
      <form>
        <input
          type="text"
          name="idea"
          placeholder="Enter an idea"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          />
      </form>
      <button onClick={submitIdea} className="submit-idea">Submit Idea</button>
      {allIdeas.length !== 0 && allIdeas.map((idea, index) => <p key={index}>{idea}</p>)}
    </section>
  );
}

export default App;
