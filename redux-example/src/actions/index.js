export const addIdea = idea => {
  return {
    type: 'ADD_IDEA',
    payload: idea
  }
}

export const deleteIdea = (ideaToDel, allIdeas) => {
  const filteredIdeas = allIdeas.filter(idea => idea !== ideaToDel)
  return {
    type: 'REMOVE_IDEA',
    payload: filteredIdeas
  }
}
