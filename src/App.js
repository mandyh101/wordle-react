import './App.css'
import { useState, useEffect } from 'react'
import Wordle from './components/Wordle'

function App() {
  const [guessedWord, setGuessedWord] = useState('SUPER')
  let [wordle, setWordle] = useState('squid')

  //TODO set up names route so people cant visit this URL to see the word

  useEffect(() => {
    const getWordle = () => {
      fetch('http://localhost:8000/word')
        .then((response) => response.json())
        .then((json) => {
          // console.log(json)
          setWordle(json.toUpperCase())
        })
        .catch((err) => console.log(err))
    }
    getWordle()
  }, [])

  return (
    <>
      <div className="App">
        <h1>Wordle</h1>
        <Wordle wordle={wordle} />
      </div>
    </>
  )
}

export default App
