export function fetchUser() {
  return {
    type: "FETCH_USER_FULFILLED",
    payload: {
      name: "Prem",
      age: 24,
    }
  }
}

export function setUserName(name) {
  return {
    type: 'SET_USER_NAME',
    payload: name,
  }
}

export function setUserAge(age) {
  return {
    type: 'SET_USER_AGE',
    payload: age,
  }
}
