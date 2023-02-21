import { FormEvent, useState, KeyboardEvent } from "react"
import { Header } from "../../components/Header/Header"
import { Separator } from "../../components/Separator/Separator"
import { Tweet } from "../../components/Tweet/Tweet"
import "./Timeline.css"

export function Timeline() {
  const [newTweet, setNewTweet] = useState("")
  const [tweets, setTweets] = useState([
    "top 10",
    "Hello World :)",
    "Meu primeiro tweet",
  ])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    if (!newTweet) {
      alert("Tweet inválido.")
    } else {
      setTweets([newTweet, ...tweets])
      setNewTweet("")
    }
  }

  function handleKeyDownSubmit(event: KeyboardEvent) {
    if (event.key === "Enter") {
      if (!newTweet) {
        alert("Tweet inválido.")
      } else {
        setTweets([newTweet, ...tweets])
        setNewTweet("")
      }
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/adkasima.png"
            alt="Imagem de Adriel Kasima"
          />
          <textarea
            id="tweet"
            placeholder="What's happening ?"
            value={newTweet}
            onKeyDown={handleKeyDownSubmit}
            onChange={(event) => {
              setNewTweet(event.target.value)
            }}
          ></textarea>
        </label>
        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />
      })}
    </main>
  )
}
