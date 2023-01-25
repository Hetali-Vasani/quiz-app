import { quizConstants } from "../_constants";

export const quizActions = {
    startQuiz,
    nextQuestion,
	resetQuiz,
	updateScore
};

function startQuiz(data) {
	return {
		type: quizConstants.START_QUIZ,
		data,
	};
}

function nextQuestion(data) {
	return {
		type: quizConstants.NEXT_QUESTION,
		data,
	};
}

function resetQuiz(data) {
	return {
		type: quizConstants.RESET_QUIZ,
		data,
	};
}

function updateScore(data) {
	return {
		type: quizConstants.UPDATE_SCORE,
		data
	}
}