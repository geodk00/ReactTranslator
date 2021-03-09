
/*
  Helper functions to save and load from locaStorage
*/
const loadState = (key) => {
  try {
    const serializedState = window.localStorage.getItem(key)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

const saveState = (key, state) => {
  try {
    const serializedState = JSON.stringify(state)
    window.localStorage.setItem(key, serializedState)
  } catch (err) {
    console.log(err)
  }
}

const removeState = (key) => {
  try {
    console.log('Removing state with key: ' + key)
    window.localStorage.removeItem(key)
  } catch (err) {
    console.log(err)
  }
}
export { saveState, loadState, removeState }
