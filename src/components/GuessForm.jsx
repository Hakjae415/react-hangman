import { useState } from "react"
import { Button } from "@mui/material"
const GuessForm = () => {
    const [guesses, setGuesses] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`You guessed ${guesses}`)
        console.log(guesses)
        setGuesses("")
    }

    return (
        <>
          <h2>Guess-Form</h2>
          <form onSubmit={handleSubmit}>
            <label>
                Guess Here
                <input
                    type="text"
                    placeholder="Enter Letter"
                    value={guesses}
                    onChange={(e) => setGuesses(e.target.value)}
                    pattern="[A-Za-z]{1}"
                    maxLength={1}
                    size={6}
                 />
            </label>
            <Button type="submit" variant="contained" color="success">Guess</Button>
          </form>
        </>
    )
}

export default GuessForm