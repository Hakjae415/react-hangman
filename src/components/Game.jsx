import { useState, useEffect } from "react"
import Graveyard from "./Graveyard"
import WordDisplay from "./WordDisplay"
import GuessForm from "./GuessForm"

const Game = () => {
    const [currentWord, setCurrentWord] = useState(null)
    const [guesses, setGuesses] = useState("")

    const formSubmitHandler = (e) => {
        e.preventDefault();
        // const splitWord = currentWord.split("") // <-- would be needed if we didnt fetchWord with word[0]
        (currentWord.includes(guesses)) ? alert(`You correctly guessed ${guesses}`) : 
        alert(`You incorrectly guessed, try again`)
        console.log(guesses)
    }

    useEffect(() => {
        const fetchWord = async() => {
        try {
            const rng = Math.floor(Math.random() * 3) + 4
            const response = await fetch(`https://random-word-api.vercel.app/api?length=${rng}`)
            const word = await response.json()
            setCurrentWord(word[0].toUpperCase())
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
          <GuessForm guesses={guesses} setGuesses={setGuesses} formSubmitHandler={formSubmitHandler}/>
          <Graveyard/>
        </>
    )
}

export default Game