import { combineReducers } from "redux";
import { setVolunteers } from "./volunteers";
import { setLoader } from "./auxiliiary";

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */
const allReducers = combineReducers({
  volunteers: setVolunteers,
  loading: setLoader
});

export default allReducers;
