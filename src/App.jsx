import { useState, useEffect } from 'react'
import axios from 'axios'
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
      <h1>Hello World!</h1>
    </>
  )
}

export default App
