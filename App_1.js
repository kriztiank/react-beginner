import './App.css'
// import { User } from './User'

// COMPONENTS, PROPS
// function App() {
//   const users = [
//     { name: 'Kris', age: 53 },
//     { name: 'Per', age: 25 },
//     { name: 'Ib', age: 45 },
//   ]

//   return (
//     <div className='App'>
//       {users.map((value, key) => {
//         return (
//           <div key={key}>
//             <User name={value.name} age={value.age} />
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default App

// TERNARY OPERATOR
// function App() {
//   const planets = [
//     { name: 'Mars', isGasPlanet: false },
//     { name: 'Earth', isGasPlanet: false },
//     { name: 'Jupiter', isGasPlanet: true },
//     { name: 'Venus', isGasPlanet: false },
//     { name: 'Neptune', isGasPlanet: true },
//     { name: 'Uranus', isGasPlanet: true },
//   ]

//   return (
//     <div className='App'>
//       {planets.map(
//         (planet, key) => !planet.isGasPlanet && <h1> {planet.name} </h1>
//       )}
//     </div>
//   )
// }

// export default App

// STATE EXAMPLE 1 - INPUT VALUE
// import { useState } from 'react'

// function App() {
//   const [text, setText] = useState('')

// // EXTERNAL FUNCTION
//   const handleText = (event) => {
//     setText(event.target.value)
//   }

//   return (
//     <div className='App'>
//       <input type='text' onChange={handleText} />
//       {text}
//     </div>
//   )
// }

// export default App

// STATE EXAMPLE 2 - BUTTON SHOW/HIDE TEXT
// import { useState } from 'react'

// function App() {
//   const [showText, setShowText] = useState(true)

//   return (
//     <div className='App'>
//       {/* INLINE FUNCTION */}
//       <button
//         onClick={() => {
//           setShowText(!showText)
//         }}
//       >
//         Show/Hide
//       </button>
//       {showText === true && <h1>Hi my name is Kris</h1>}
//     </div>
//   )
// }

// export default App

// STATE EXAMPLE 3 - BUTTON CHANGE TEXT COLOR
// import { useState } from 'react'

// function App() {
//   const [textColor, setTextColor] = useState('black')

//   return (
//     <div className='App'>
//       {/* INLINE FUNCTION */}
//       <button
//         onClick={() => {
//           setTextColor(textColor === 'black' ? 'red' : 'black')
//         }}
//       >
//         Change color
//       </button>
//       <h1 style={{ color: textColor }}>Hi my name is Kris</h1>
//     </div>
//   )
// }

// export default App
