import { combineReducers } from "redux";

import mapsReducer from "./map";
const rootReducer = combineReducers({ mapsReducer });

export default rootReducer;
