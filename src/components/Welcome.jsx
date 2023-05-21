import {useContext} from 'react';
import { QuizContext } from '../context/quiz';
import Quiz from '../img/quiz.svg';
import './welcome.css'

const Welcome = () => {

  const [QuizState, dispatch] = useContext(QuizContext)
    
   
    return (
    <div id="welcome">
        <h2>Seja Bem-Vindo</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button onClick={()=>dispatch({type:"CHANGE STATE"})}>Iniciar</button>
        <img src={Quiz} alt="Inicio do quiz" />
    </div>
  )
}

export default Welcome