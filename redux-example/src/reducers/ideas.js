const ideaReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_IDEA':
      return [...state, action.message]
    case 'REMOVE_IDEA':
      return state.filter(idea => idea.message !== action.message)
    default:
      return state;
  }
}

export default ideaReducer;
