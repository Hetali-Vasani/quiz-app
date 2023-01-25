import { quizConstants } from "../_constants";

const initialState = {
    questionId: 0,
    scoreValue: 0,
    isStart: false,
    isEnd: false,
};

export function quizReducer(state = initialState, action) {
	switch (action.type) {
		case quizConstants.START_QUIZ:
			return {
				...state,
                questionId: action.data.questionId,
                isStart: true,
			};

		case quizConstants.NEXT_QUESTION:
			return {
				...state,
                questionId: action.data.questionId,
				isEnd: action.data.isEnd,
			}
		
		case quizConstants.UPDATE_SCORE:
			return {
				...state,
                scoreValue : action.data.scoreValue
			}

        case quizConstants.RESET_QUIZ:
            return initialState;
		
		default:
			return state;
	}
}