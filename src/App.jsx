import { useState, useEffect } from 'react'
import axios from 'axios'

import Cards from './components/Cards'

const actorEndpoint = 'https://lanciweb.github.io/demo/api/actors/'
const actressEndpoint = 'https://lanciweb.github.io/demo/api/actresses/'

function App() {

  // state for actors and actresses
  const [actors, setActors] = useState([])
  const [actresses, setActresses] = useState([])

  // get actors array
  const fetchActors = () => {
    axios
      .get(actorEndpoint)
      .then((response) => {
        setActors(response.data)
        // console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // get actresses array
  const fetchActresses = () => {
    axios
      .get(actressEndpoint)
      .then((response) => {
        setActresses(response.data)
        // console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // fetch actors and actresses on load
  useEffect(() => {
    fetchActors()
    fetchActresses()
  }, [])

  return (
    <>
      <header>
        <h1>React API</h1>
      </header>

      <div className="container">
        <ul className='card-container'>

          {actors.map((element) => (
            <Cards key={`actor-${element.id}`} element={element} />
          ))}

          {actresses.map((element) => (
            <Cards key={`actress-${element.id}`} element={element} />
          ))}

        </ul>
      </div>
    </>
  )
}

export default App
