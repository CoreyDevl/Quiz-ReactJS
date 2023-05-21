import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

const Question = () => {

const [quizState, dispatch] = useContext(QuizContext)
console.log("quizState: ", quizState);

  return (
    <div id="question">
        <p>
            Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length }
        </p>
        <h2>Pergunta Atual</h2>
        <div id="options-container">
            <p>opções</p>
        </div>
        <button>Continuar</button>
    </div>
  )
}

export default Question