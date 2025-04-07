import { useState } from 'react'
import './App.css'

function App() {
  const [match, setMatch] = useState(false)
  const [boxArr, setBoxArr] = useState(Array(9).fill(''))
  const [winner, setWinner] = useState<string | null>(null)

  const checkWinner = (squares: string[]) => {
    const lines = [
      [0, 1, 2], // horizontal
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], // vertical
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], // diagonal
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

  return (
    <>
      {winner && <div className="winner">Player {winner} wins!</div>}
      <div className='flex'>
        <div className="box w-15 h-15 border-1 border-solid border-black" onClick={() => handleBox(0)}>{boxArr[0]}</div>
        <div className="box w-15 h-15 border-1 border-solid border-black" onClick={() => handleBox(1)}>{boxArr[1]}</div>
        <div className="box w-15 h-15 border-1 border-solid border-black" onClick={() => handleBox(2)}>{boxArr[2]}</div>
      </div>
      <div className='flex'>
        <div className="box w-15 h-15 border-1 border-solid border-black" onClick={() => handleBox(3)}>{boxArr[3]}</div>
        <div className="box w-15 h-15 border-1 border-solid border-black" onClick={() => handleBox(4)}>{boxArr[4]}</div>
        <div className="box w-15 h-15 border-1 border-solid border-black" onClick={() => handleBox(5)}>{boxArr[5]}</div>
      </div>
      <div className='flex'>
        <div className="box w-15 h-15 border-1 border-solid border-black" onClick={() => handleBox(6)}>{boxArr[6]}</div>
        <div className="box w-15 h-15 border-1 border-solid border-black" onClick={() => handleBox(7)}>{boxArr[7]}</div>
        <div className="box w-15 h-15 border-1 border-solid border-black" onClick={() => handleBox(8)}>{boxArr[8]}</div>
      </div>
      <button className='p-1 bg-sky-500 rounded-3xl ' onClick={() => setBoxArr(Array(9).fill(''))}>Restart</button>
    </>
  )
}

export default App
