import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState('olive')
  

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button style={{backgroundColor: 'red'}} onClick={() => setcolor("red")} className='outline-none px-4 py-1 rounded-full text-black shadow lg text-black'>Red</button>
            <button style={{backgroundColor: 'blue'}} onClick={() => setcolor("blue")} className='outline-none px-4 py-1 rounded-full text-black shadow lg text-black'>Blue</button>
            <button style={{backgroundColor: 'green'}} onClick={() => setcolor("green")} className='outline-none px-4 py-1 rounded-full text-black shadow lg text-black'>Green</button>
            <button style={{backgroundColor: 'pink'}} onClick={() => setcolor("pink")} className='outline-none px-4 py-1 rounded-full text-black shadow lg text-black'>Pink</button>
            <button style={{backgroundColor: 'violet'}} onClick={() => setcolor("violet")} className='outline-none px-4 py-1 rounded-full text-black shadow lg text-black'>Violet</button>
            <button style={{backgroundColor: 'gold'}} onClick={() => setcolor("gold")} className='outline-none px-4 py-1 rounded-full text-black shadow lg text-black'>Gold</button>
            <button style={{backgroundColor: 'purple'}} onClick={() => setcolor("purple")} className='outline-none px-4 py-1 rounded-full text-black shadow lg text-black'>Purple</button>
            <button style={{backgroundColor: 'brown'}} onClick={() => setcolor("brown")} className='outline-none px-4 py-1 rounded-full text-black shadow lg text-black'>Brown</button>
            <button style={{backgroundColor: 'lightblue'}} onClick={() => setcolor("lightblue")} className='outline-none px-4 py-1 rounded-full text-black shadow lg text-black'>Lightblue</button>
            <button style={{backgroundColor: 'yellow'}} onClick={() => setcolor("yellow")} className='outline-none px-4 py-1 rounded-full text-black shadow lg text-black'>Yellow</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App