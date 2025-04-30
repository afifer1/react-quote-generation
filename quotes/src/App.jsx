import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [quote,setQuote] = useState("Hello")
  const generation = async () => {
    try{
      const response = await fetch("https://api.allorigins.win/raw?url=https://zenquotes.io/api/random", {cache: 'no-cache'});
      if (response.ok){
        const jsonResponse = await response.json();
        const generatedQuote = jsonResponse[0]['q']
        console.log(generatedQuote)
        setQuote(jsonResponse[0]['q']);
      }
    }
    catch(error){
      console.log(error)
      }
  }
  return (
    <div>
    <div className="text">{quote}</div>
    <button className="generateButton" onClick={generation}>Generate</button>
    </div>
  )
}

export default App
