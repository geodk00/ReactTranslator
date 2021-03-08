
const loadState = (key) => {
  try {
    console.log('loading key: ' + key)

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
    console.log('Saving key: ' + key)
    console.log('Saving state: ' + state)

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

/*
import throttle from 'lodash.throttle';
...
store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos
  });
}, 1000));

*/
