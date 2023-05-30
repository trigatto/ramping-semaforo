import React, { useState } from 'react'

export default function App() {
  const [lights, setLights] = useState({
    red: { isActive: false },
    yellow: { isActive: false },
    green: { isActive: false }
  })

  function toggleActive(light) {
    setLights((prevLights) => {
      const updatedLights = Object.keys(prevLights).reduce((acc, currLight) => {
        acc[currLight] = { isActive: false }
        return acc
      }, {})

      updatedLights[light] = { isActive: true };
      return updatedLights
    })
  }

  return (
    <section className='box'>
      <a
        id='red'
        className={`light ${lights.red.isActive ? 'red' : ''}`}
        onClick={() => toggleActive('red')}
      >
      </a>
      <a
        id='yellow'
        className={`light ${lights.yellow.isActive ? 'yellow' : ''}`}
        onClick={() => toggleActive('yellow')}
      >
      </a>
      <a
        id='green'
        className={`light ${lights.green.isActive ? 'green' : ''}`}
        onClick={() => toggleActive('green')}
      >
      </a>
    </section>
  )
}

