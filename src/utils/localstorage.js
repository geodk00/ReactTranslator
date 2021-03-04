
const loadState = () => {
  try {
    const serializedState = window.localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    window.localStorage.setItem('state', serializedState)
  } catch (err) {
    console.log(err)
  }
}

const removeState = () => {
  try {
    window.localStorage.removeItem('state')
  } catch (err) {
    console.log(err)
  }
}
export { saveState, loadState, removeState }

/*
import throttle from 'lodash.throttle';
...
store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos
  });
}, 1000));

*/
