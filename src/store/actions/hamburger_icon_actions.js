export const TOGGLEHAMBURGERICONSTATE = 'TOGGLEHAMBURGERICONSTATE'

export const handleHamburgerIconState = currentHamburgerIconState => ({
  type: TOGGLEHAMBURGERICONSTATE,
  payload: currentHamburgerIconState
})
