import {useState, useEffect} from 'react';
import Card from './Card';

const backgrounds = ["#b6cf86", "#ccb98f", "#66babd", "#8bbde8", "#e3caed" ];
const url = "https://type.fit/api/quotes"

const bodyEl = document.querySelector("body");

function App() {
  const [quote, setQuote] = useState({});
  const [color, setColor] = useState(null);
  const [isError, setIsError] = useState(false)

  const changeColor = () => {
    const randIdx = Math.floor(Math.random() * backgrounds.length)
    bodyEl.style.backgroundColor = backgrounds[randIdx]
    setColor(backgrounds[randIdx])
  }
  
  const fetchQuote = async () => {
    setIsError(false)
    try {
      const response = await fetch(url);
      const data = await response.json();
      const randIdx = Math.floor(Math.random() * data.length)
      setQuote(data[randIdx])
      changeColor()
    } catch (err) {
      setIsError(true)
    }
  }

  useEffect(() => {
    fetchQuote();
  }, [])

  if(isError) {
    return <div className="d-flex justify-content-center mt-5">
      <h4>OPPPS, something went wrong</h4>
    </div>
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">FreeCodeCamp - FrontEnd Libraries</h1>
      <h2 className="text-center mt-3">Random Quote Machine</h2>
      <Card quote={quote} newQuote={fetchQuote} newColor={color}/>
    </div>
  );
}

export default App;
