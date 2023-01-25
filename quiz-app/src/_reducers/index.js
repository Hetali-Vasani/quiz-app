import { combineReducers } from "redux";
import { quizReducer } from "./quiz.reducer";

const allReducers = combineReducers({
	quizReducer,
});

const rootReducer = (state, action) => {
	return allReducers(state, action);
};

export default rootReducer;