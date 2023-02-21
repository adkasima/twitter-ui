import { PaperPlaneRight } from "phosphor-react"
import { FormEvent, useState, KeyboardEvent } from "react"
import { Header } from "../../components/Header/Header"
import { Separator } from "../../components/Separator/Separator"
import { Tweet } from "../../components/Tweet/Tweet"

import "./Status.css"

export function Status() {
  const [newAnswer, setNewAnswer] = useState("")
  const [answers, setAnswers] = useState([
    "Parabéns ai fera. 😎👍",
    "Concordo. 🚀",
    "Só acho estranho que",
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    if (!newAnswer) {
      alert("Tweet inválido.")
    } else {
      setAnswers([newAnswer, ...answers])
      setNewAnswer("")
    }
  }

  function handleKeyDownSubmit(event: KeyboardEvent) {
    if (event.key === "Enter") {
      if (!newAnswer) {
        alert("Tweet inválido.")
      } else {
        setAnswers([newAnswer, ...answers])
        setNewAnswer("")
      }
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem voluptatem excepturi rem natus? Accusamus voluptas quia est deserunt ducimus ad, eum laboriosam, impedit expedita labore provident optio, deleniti natus reiciendis." />

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/adkasima.png"
            alt="Imagem de Adriel Kasima"
          />
          <textarea
            id="tweet"
            value={newAnswer}
            placeholder="Tweet your answer"
            onKeyDown={handleKeyDownSubmit}
            onChange={(event) => {
              setNewAnswer(event?.target.value)
            }}
          ></textarea>
        </label>
        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />
      })}
    </main>
  )
}
