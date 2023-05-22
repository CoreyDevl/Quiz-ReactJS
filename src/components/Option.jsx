import {useContext} from 'react'
import { QuizContext } from '../context/quiz'
import './Option.css'

const Option = ({option, answer, selectOption}) => {

    const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div className='option' onClick={()=> selectOption()}>{option}</div>
  )
}

export default Option