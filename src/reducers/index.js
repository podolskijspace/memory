const initialState = {
  data:[],
  clickData: [],
  counter: 0,
  time: 0,
  failResults:[],
  winResults:[],
  isWin: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_DATA':
      return {
        ...state,
        data: action.payload,
      };
    case 'SET_CLICK_DATA':
      return {
        ...state,
        clickData: action.payload,
      };
    case 'SET_STATUS':
      let isWin = false
      let index = state.data.findIndex((item, i) => i === action.payload.id);
      let newArr = ~index ? [
        ...state.data.slice(0, index),
        {
          status: action.payload.status,
          text: state.data[index].text,
        },
        ...state.data.slice(index+1)
      ] : []
      if (newArr.length && !~newArr.findIndex(item => (item.status === 'closed' || item.status === 'opened'))) {
        isWin = true
      }
      return {
        ...state,
        data: newArr,
        isWin,
      };
    case 'SET_COUNTER':
      return {
        ...state,
        counter: action.payload,
      };
    case 'SET_TIME':
      return {
        ...state,
        time: action.payload ? state.time + 1 : 0,
      };
    case 'SET_RESULT':
      let newObj = {
        time: state.time,
        counter: state.counter,
      }
      let workArray
      if (action.payload) {
        workArray = state.winResults;
      }
      else {
        workArray = state.failResults;
      }
      let indexF = workArray.findIndex(item => newObj.time < item.time);
      indexF = !~indexF ? workArray.length : indexF

      let newArrF = [
        ...workArray.slice(0, indexF),
        newObj,
        ...workArray.slice(indexF)
      ]

      if (action.payload) {
        return {
          ...state,
          winResults: newArrF
        };
      }
      else {
        return {
          ...state,
          failResults: newArrF
        };
      }
    case 'SET_WIN':
      return {
        ...state,
        isWin: false,
      }
    default:
      return state;
  }
} 

export default reducer;