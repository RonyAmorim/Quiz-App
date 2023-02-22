import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import React from 'react'
import quiz from "../img/quiz.svg"

import "./Welcome.css"

const welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  
  return (
    <div id='welcome'>
        <h2>Seja Bem-Vindo</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
    <img src= {quiz} alt="Inicio do Quiz" />
    </div>
  )
}

export default welcome