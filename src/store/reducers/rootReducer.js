import { combineReducers } from "redux";

import mapsReducer from "./map";
import userReducer from "./user";
const rootReducer = combineReducers({ map: mapsReducer, user: userReducer });

export default rootReducer;
