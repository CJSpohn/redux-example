export const addIdea = idea => {
  return {
    type: 'ADD_IDEA',
    payload: idea
  }
}

export const deleteIdea = (ideaToDel, allIdeas) => {
  const filteredIdeas = allIdeas.filter(idea => idea !== ideaToDel)
  console.log(filteredIdeas)
  return {
    type: 'REMOVE_IDEA',
    payload: filteredIdeas
  }
}
