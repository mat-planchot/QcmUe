const initialState = { favoritesQcm: [] }

function toggleFavorite(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const favoriteQcmIndex = state.favoritesQcm.findIndex(item => item.idUe === action.value.idUe)
      if (favoriteQcmIndex !== -1) {
        // suppression de la liste
        nextState = {
          ...state,
          favoritesQcm: state.favoritesQcm.filter( (item, index) => index !== favoriteQcmIndex)
        }
      }
      else {
        // ajout à la liste
        nextState = {
          ...state,
          favoritesQcm: [...state.favoritesQcm, action.value]
        }
      }
      return nextState || state
  default:
    return state
  }
}

export default toggleFavorite
