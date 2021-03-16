const ideaReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_IDEA':
      return [...state, action]
    case 'REMOVE_IDEA':
      return [...state.filter(idea => idea.id !== action.id)]
  }
}

export default ideaReducer;
