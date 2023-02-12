// import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [guessedWord, setGuessedWord] = useState('SUPER')
  const [wordle, setWordle] = useState('')

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
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <h1>Wordle</h1>
      <p>{wordle}</p>
    </div>
  )
}

export default App
