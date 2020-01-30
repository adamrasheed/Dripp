export const loadState = () => {
  try {
    const rawState = localStorage.getItem('state')
    if (rawState === null) {
      return undefined
    }
    return JSON.parse(rawState)

  }
  catch (error) {
    console.error(error)
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const rawState = JSON.stringify(state);
    localStorage.setItem('state', rawState)
  }
  catch (error) {
    console.error(error)
  }
}