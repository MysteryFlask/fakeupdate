import { useState, useEffect } from 'react'
import './style.css'

function App() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {return prevProgress >= 100 ? 0 : prevProgress + 1})
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <>
        <div>
          <div>
            <div className='spinner'></div>
            <span className='working'>Working on updates {progress}%</span>
            <span className='on'>Please keep your computer on.</span>
            <span className='restart'>Your computer may restart a few times.</span>
          </div>
        </div>
    </>
  )
}

export default App