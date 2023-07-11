import * as Actions from "../actions";

const initialState = {
  newsSource: "abc-news",
  isLoading: true,
  activeNewsSource: [],
  tabData: [],
  tabDataClone: [],
  url: "sources",
  api_key: process.env.REACT_APP_API_KEY,
  proxy_url: process.env.REACT_APP_PROXY_URL,
  currentHamburgerIconState: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CHANGE_NEWS_SOURCE: {
      return {
        ...state,
        newsSource: action.payload,
      };
    }
    case Actions.CHANGE_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case Actions.CHANGE_ACTIVE_NEWS_SOURCE: {
      return {
        ...state,
        activeNewsSource: action.payload,
      };
    }
    case Actions.POPULATE_TAB_DATA: {
      return {
        ...state,
        tabData: action.payload,
        tabDataClone: action.payload,
      };
    }
    case Actions.SEARCH_TAB_DATA: {
      const newTabData = state.tabDataClone.filter((tdc) =>
        tdc.title.toLowerCase().startsWith(action.payload)
      );
      return {
        ...state,
        tabData: newTabData,
      };
    }
    case Actions.RESET_TAB_DATA: {
      return {
        ...state,
        tabData: state.tabDataClone,
      };
    }
    case Actions.CHANGE_URL: {
      return {
        ...state,
        url: action.payload,
      };
    }
    case Actions.TOGGLE_HAMBURGER_ICON_STATE: {
      return {
        ...state,
        currentHamburgerIconState: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
