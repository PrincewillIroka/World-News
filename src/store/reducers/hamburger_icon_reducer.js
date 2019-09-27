import * as Actions from '../actions'

const initialState = {
  currentHamburgerIconState: false
}

const hamburgerIconReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.TOGGLEHAMBURGERICONSTATE: {
      return {
        ...state,
        currentHamburgerIconState: action.payload
      }
    }
    default: {
      return state
    }
  }
}

export default hamburgerIconReducer
