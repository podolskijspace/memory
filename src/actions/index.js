const createData = (data) => {
  return {
    type: 'CREATE_DATA',
    payload: data,
  }
}

const setClickData = (id) => {
  return {
    type: 'SET_CLICK_DATA',
    payload: id,
  }
}

const setStatus = (obj) => {
  return {
    type: 'SET_STATUS',
    payload: obj,
  }
}

const setCounter = (num) => {
  return {
    type: 'SET_COUNTER',
    payload: num,
  }
}

const setTime = (param=true) => {
  return {
    type: 'SET_TIME',
    payload: param,
  }
}

const setNewResult = (status = false) => {
  return {
    type: 'SET_RESULT',
    payload: status
  }
}

const setWin = () => {
  return {
    type: 'SET_WIN',
  }
}


export {
  createData,
  setClickData,
  setStatus,
  setCounter,
  setTime,
  setNewResult,
  setWin,
}