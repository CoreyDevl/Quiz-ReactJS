import { useContext } from 'react'
import { QuizContext } from './context/quiz'

const Question = () => {

const [QuizState, dispatch] = useContext(QuizContext)

  return (
    <div>Question</div>
  )
}

export default Question