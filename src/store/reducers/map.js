import { SET_VIEW_STATE } from "../actions/actionTypes";

const initialState = {
  mapStyle: "mapbox://styles/mapbox/streets-v11",
  viewState: {
    latitude: 37.8,
    longitude: -122.4,
    zoom: 14,
  },
};

const mapsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VIEW_STATE:
      return { ...state, viewState: action.payload };

    default:
      return state;
  }
};
export default mapsReducer;
