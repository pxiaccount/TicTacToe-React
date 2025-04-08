import { useState } from 'react'
import './App.css'

function App() {
  const [match, setMatch] = useState(false)
  const [boxArr, setBoxArr] = useState(Array(9).fill(''))
  const [winner, setWinner] = useState<string | null>(null)
  const [darkMode, setDarkMode] = useState(true)

  const checkWinner = (squares: string[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (const [x, y, z] of lines) {
      if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
        return squares[x]
      }
    }
  }

  const handleBox = (i: number) => {
    if (boxArr[i] !== '' || winner) return

    const newBox = [...boxArr]
    newBox[i] = match ? 'X' : 'O'
    setBoxArr(newBox)

    const result = checkWinner(newBox)
    if (result) {
      setWinner(result)
    } else {
      setMatch(!match)
    }
  }

  const restart = () => {
    setBoxArr(Array(9).fill(''))
    setWinner(null)
    setMatch(false)
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <>
      <div className={`min-h-screen flex flex-col items-center justify-center gap-4 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <button
          onClick={toggleDarkMode}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        {winner && <div className={`text-2xl font-bold winner-text ${darkMode ? 'text-white' : 'text-black'}`}>
          Player {winner} wins!
        </div>}

        <div className='flex flex-col gap-1'>
          <div className='flex gap-1'>
            {[0, 1, 2].map(i => (
              <div
                key={i}
                className={`box w-20 h-20 border-2 flex items-center justify-center text-2xl cursor-pointer
                  ${darkMode
                    ? 'border-white text-white hover:bg-gray-200 hover:text-black'
                    : 'border-black text-black hover:bg-gray-100'
                  }`}
                onClick={() => handleBox(i)}
              >
                {boxArr[i]}
              </div>
            ))}
          </div>
          <div className='flex gap-1'>
            {[3, 4, 5].map(i => (
              <div
                key={i}
                className={`box w-20 h-20 border-2 flex items-center justify-center text-2xl cursor-pointer
                  ${darkMode
                    ? 'border-white text-white hover:bg-gray-200 hover:text-black'
                    : 'border-black text-black hover:bg-gray-100'
                  }`}
                onClick={() => handleBox(i)}
              >
                {boxArr[i]}
              </div>
            ))}
          </div>
          <div className='flex gap-1'>
            {[6, 7, 8].map(i => (
              <div
                key={i}
                className={`box w-20 h-20 border-2 flex items-center justify-center text-2xl cursor-pointer
                  ${darkMode
                    ? 'border-white text-white hover:bg-gray-200 hover:text-black'
                    : 'border-black text-black hover:bg-gray-100'
                  }`}
                onClick={() => handleBox(i)}
              >
                {boxArr[i]}
              </div>
            ))}
          </div>
        </div>
        <button className='px-4 py-2 bg-sky-500 text-white rounded-full hover:bg-sky-600' onClick={() => restart()}>Restart</button>
      </div>
    </>
  )
}

export default App
