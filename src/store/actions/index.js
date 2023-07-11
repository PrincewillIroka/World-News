export const CHANGE_NEWS_SOURCE = "CHANGE_NEWS_SOURCE";
export const CHANGE_IS_LOADING = "CHANGE_IS_LOADING";
export const CHANGE_ACTIVE_NEWS_SOURCE = "CHANGE_ACTIVE_NEWS_SOURCE";
export const POPULATE_TAB_DATA = "POPULATE_TAB_DATA";
export const SEARCH_TAB_DATA = "SEARCH_TAB_DATA";
export const RESET_TAB_DATA = "RESET_TAB_DATA";
export const CHANGE_URL = "CHANGE_URL";
export const TOGGLE_HAMBURGER_ICON_VISIBILITY = "TOGGLE_HAMBURGER_ICON_VISIBILITY";

export const toggleHamburgerIconVisibility = (isHamburgerIconVisible) => ({
  type: TOGGLE_HAMBURGER_ICON_VISIBILITY,
  payload: isHamburgerIconVisible,
});

export const handleNewsSource = (newsSource) => ({
  type: CHANGE_NEWS_SOURCE,
  payload: newsSource,
});

export const handleIsLoading = (isLoading) => ({
  type: CHANGE_IS_LOADING,
  payload: isLoading,
});

export const handleActiveNewsSource = (activeNewsSource) => ({
  type: CHANGE_ACTIVE_NEWS_SOURCE,
  payload: activeNewsSource,
});

export const populateTabData = (data) => ({
  type: POPULATE_TAB_DATA,
  payload: data,
});

export const searchTabData = (value) => ({
  type: SEARCH_TAB_DATA,
  payload: value,
});

export const resetTabData = () => ({
  type: RESET_TAB_DATA,
});

export const changeUrl = (url) => ({
  type: CHANGE_URL,
  payload: url,
});
