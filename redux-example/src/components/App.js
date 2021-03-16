import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addIdea, deleteIdea } from '../actions'

import './App.css';

const App = () => {
  const allIdeas = useSelector(state => state.ideaReducer)
  const dispatch = useDispatch();
  const [idea, setIdea] = useState('');

  const submitIdea = () => {
    if (idea) {
      dispatch(addIdea(idea))
      setIdea('')
    }
  }

  const removeIdea = (ideaToDel) => {
    dispatch(deleteIdea(ideaToDel, allIdeas))
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
      {allIdeas.length !== 0 && allIdeas.map((idea, index) => (
        <div key={index}>
          <p>{idea}</p>
          <button onClick={() => removeIdea(idea)} key={index}>del</button>
        </div>
      ))}
    </section>
  );
}

export default App;
