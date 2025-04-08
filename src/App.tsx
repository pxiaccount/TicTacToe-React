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

  const restart = () => {
    setBoxArr(Array(9).fill(''))
    setWinner(null)
    setMatch(false)
  }

  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-center gap-4'>
        {winner && <div className="text-2xl font-bold winner-text">Player {winner} wins!</div>}
        <div className='flex flex-col gap-1'>
          <div className='flex gap-1'>
            <div className="box w-20 h-20 border-2 border-black flex items-center justify-center text-2xl" onClick={() => handleBox(0)}>{boxArr[0]}</div>
            <div className="box w-20 h-20 border-2 border-black flex items-center justify-center text-2xl" onClick={() => handleBox(1)}>{boxArr[1]}</div>
            <div className="box w-20 h-20 border-2 border-black flex items-center justify-center text-2xl" onClick={() => handleBox(2)}>{boxArr[2]}</div>
          </div>
          <div className='flex gap-1'>
            <div className="box w-20 h-20 border-2 border-black flex items-center justify-center text-2xl" onClick={() => handleBox(3)}>{boxArr[3]}</div>
            <div className="box w-20 h-20 border-2 border-black flex items-center justify-center text-2xl" onClick={() => handleBox(4)}>{boxArr[4]}</div>
            <div className="box w-20 h-20 border-2 border-black flex items-center justify-center text-2xl" onClick={() => handleBox(5)}>{boxArr[5]}</div>
          </div>
          <div className='flex gap-1'>
            <div className="box w-20 h-20 border-2 border-black flex items-center justify-center text-2xl" onClick={() => handleBox(6)}>{boxArr[6]}</div>
            <div className="box w-20 h-20 border-2 border-black flex items-center justify-center text-2xl" onClick={() => handleBox(7)}>{boxArr[7]}</div>
            <div className="box w-20 h-20 border-2 border-black flex items-center justify-center text-2xl" onClick={() => handleBox(8)}>{boxArr[8]}</div>
          </div>
        </div>
        <button className='px-4 py-2 bg-sky-500 text-white rounded-full hover:bg-sky-600' onClick={() => restart()}>Restart</button>
      </div>
    </>
  )
}

export default App
