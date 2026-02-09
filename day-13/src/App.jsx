// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import React from 'react'
import Card from './components/Card'
import Header from './components/Header'
import './App.css'

const App = () => {
  return (
    <div>
      <Header />

      <div className="card-container">
        <Card 
          title="About Me"
          content="Hi! I'm Jahnavi, a passionate student who loves learning and exploring new things."
        />

        <Card 
          title="Academic Details"
          content="Biotechnology student with strong interest in technology and problem solving."
        />

        <Card 
          title="Technical Skills"
          content="HTML, CSS, JavaScript, Basics of React, Git & GitHub."
        />

        <Card 
          title="Hobbies"
          content="Reading novels, writing short poems, travelling, and exploring new places."
        />

        <Card 
          title="Interests"
          content="Web development, cybersecurity, creative writing, and learning new technologies."
        />

        <Card 
          title="Goals"
          content="To become skilled in tech, build meaningful projects, and grow independently."
        />
      </div>
    </div>
  )
}

export default App
