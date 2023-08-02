import { useState, useEffect } from "react"
import Graveyard from "./Graveyard"
import WordDisplay from "./WordDisplay"
import GuessForm from "./GuessForm"

const Game = () => {
    const [currentWord, setCurrentWord] = useState(null)

    useEffect(() => {
        const fetchWord = async() => {
        try {
            const rng = Math.floor(Math.random() * 3) + 4
            const response = await fetch(`https://random-word-api.vercel.app/api?length=${rng}`)
            const word = await response.json()
            setCurrentWord(word[0])
            console.log(word[0], "length", word[0].length)
        } catch(err) {
            console.error("Having Trouble Fetching Word", err)
        } 
    }
    fetchWord()
}, [])

    return (
        <>
          <h1>Game</h1>
          <WordDisplay currentWord={currentWord}/>
          <GuessForm/>
          <Graveyard/>
        </>
    )
}

export default Game