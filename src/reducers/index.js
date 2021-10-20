const initialState = {
  data:[
    {
      text: 1,
    },
    {
      text: 2,
    },
    {
      text: 3,
    },
    {
      text: 4,
    },
    {
      text: 1,
    },
    {
      text: 2,
    },
    {
      text: 3,
    },
    {
      text: 4,
    },
    {
      text: 1,
    },
    {
      text: 2,
    },
    {
      text: 3,
    },
    {
      text: 4,
    },
    {
      text: 1,
    },
    {
      text: 2,
    },
    {
      text: 3,
    },
    {
      text: 4,
    },
    {
      text: 1,
    },
    {
      text: 2,
    },
    {
      text: 3,
    },
    {
      text: 4,
    },
    {
      text: 1,
    },
    {
      text: 2,
    },
    {
      text: 3,
    },
    {
      text: 4,
    },
    {
      text: 1,
    },
    {
      text: 2,
    },
    {
      text: 3,
    },
    {
      text: 4,
    },
    {
      text: 1,
    },
    {
      text: 2,
    },
    {
      text: 3,
    },
    {
      text: 4,
    },
    {
      text: 3,
    },
    {
      text: 4,
    },
    {
      text: 3,
    },
    {
      text: 4,
    },
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_ACTION':
      return {
        ...state,
        menuActive: !state.menuActive,
      };

    default:
      return state;
  }
} 

export default reducer;