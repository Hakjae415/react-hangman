import Graveyard from "./Graveyard"
import WordDisplay from "./WordDisplay"
import GuessForm from "./GuessForm"

const Game = () => {
    return (
        <>
          <h1>Game</h1>
          <WordDisplay/>
          <GuessForm/>
          <Graveyard/>
        </>
    )
}

export default Game