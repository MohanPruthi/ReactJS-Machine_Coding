import React, { useEffect, useState } from 'react'
import Bar from './Bar'
import './style.css'

const ProgressBar = () => {
    const [value, setValue] = useState(0)
    const [success, setSuccess] = useState(false)

    useEffect(()=> {
        setInterval(() => {
            setValue((prev)=> prev+0.1)
        }, 20);
        
    }, [])

    return (
        <div className='app'>
            <span>Progress Bar</span>
            <Bar value={value} setSuccess={setSuccess}/>
            {
                success? <div>Completed!</div> : <div>Loading...</div>
            }
        </div>
    )
}

export default ProgressBar
