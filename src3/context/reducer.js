export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favoriteList: [
          ...state.favoriteList,
          action.payload.selectedRestaurant,
        ],
      };
    default:
      return state;
  }
}
