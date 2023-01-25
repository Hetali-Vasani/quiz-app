import { Button, Card, CardActions, CardContent, Radio, RadioGroup, FormControlLabel, FormControl,  FormLabel, Typography } from "@mui/material";
import { QuizData } from "../QuizData";
import { useSelector, useDispatch } from "react-redux";
import { quizActions } from "../_actions/quiz.actions";

const Quiz = () => {
    const { questionId, scoreValue, isStart, isEnd } = useSelector(state => state.quizReducer)
    const dispatch = useDispatch();
    const handleButton = (type) => {
        switch (type) {
            case 'start':
                dispatch(quizActions.startQuiz({questionId: 1}))
                break;
            
            case 'next':
                dispatch(quizActions.nextQuestion({questionId: questionId+1, isEnd: questionId >= Object.values(QuizData).length ? true: false}))
                break;
            
            case 'restart':
                dispatch(quizActions.resetQuiz());
                break;
            
            default:
                break;
        }
    }
    const handleChange = (e) => {
        if (e.target.value === QuizData[questionId].correctAnswer) {
            dispatch(quizActions.updateScore({scoreValue : scoreValue+1}))
        } else {
            dispatch(quizActions.updateScore({scoreValue : scoreValue?scoreValue-1:0}))
        }
    }
    const start = () => {
        return (
            <Button onClick={() => handleButton('start')}>Start quiz</Button>
        )
    }
    
    const question = () => {
        return (
            <FormLabel id={QuizData[questionId].id}>{QuizData[questionId].name}</FormLabel>
        )
    }
    
    const options = () => {
        return (
            <RadioGroup
                aria-labelledby={QuizData[questionId].id}
                name={QuizData[questionId].id}
                onChange={(e) => handleChange(e)}
            >
                {QuizData[questionId].options.map((option) =>
                   <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
                )}
            </RadioGroup>
        )
    }
    
    const next = () => {
        return (
            <Button onClick={() => handleButton('next')}>Next question</Button>
        )
    }
    
    const score = () => {
        return (
            <Typography gutterBottom variant="h5" component="div">
                Score : {scoreValue}
            </Typography>
        )
    }
    
    const restart = () => {
        return (
            <Button onClick={() => handleButton('restart')}>Restart</Button>
        )
    }
    return (
        <Card>
            {isEnd && score()}
            {
                (isStart && !isEnd) && 
                    <CardContent sx={{ justifyContent: 'center', display: 'flex' }}>
                        <FormControl>
                            {question()}
                            {options()}
                        </FormControl>
                    </CardContent>
            }
            <CardActions sx={{ justifyContent: 'center' }}>
                {(!isStart && !isEnd) && start()}
                {(isStart && !isEnd) && next()}
                {isEnd && restart()}
            </CardActions>
        </Card>
    )
}
export default Quiz;