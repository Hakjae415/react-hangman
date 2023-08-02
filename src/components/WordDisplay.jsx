const WordDisplay = ({currentWord}) => {
    return (
        <>
          <h2>WordDisplay</h2>
          <p>{currentWord ? currentWord : "Fetching Word...."}</p>
        </>
    )
}

export default WordDisplay