const ideaReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_IDEA':
      return [...state, action.payload]
    case 'REMOVE_IDEA':
      return action.payload
    default:
      return state;
  }
}

export default ideaReducer;
