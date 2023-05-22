import {useContext} from 'react'
import { QuizContext } from '../context/quiz'
import './GameOver.css'
import WellDone from '../img/welldone.svg'

const GameOver = () => {
  return (
    <div id='gameover'>
        <h2>Fim de Jogo!</h2>
        <p>Pontuação: 0 </p>
        <p>Você acertou 0 de 0 perguntas.</p>
        <img src={WellDone} alt="Fim do Quiz" />
        <button>Reiniciar</button>
    </div>
  )
}

export default GameOver