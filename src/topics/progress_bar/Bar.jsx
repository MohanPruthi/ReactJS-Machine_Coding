import React, { useEffect, useState } from 'react'


const Bar = ({value=0, setSuccess}) => {
    const [percent, setPercent] = useState(value)

    useEffect(()=>{
        setPercent(Math.min(100, value))

        if(value > 100){
            setSuccess(true)
        }
    }, [value])

    return (
        <div className="progress">
            <span style={{
                color: percent.toFixed() > 49 ? "white" : "black"
            }}>
                {percent.toFixed()}%
            </span>

            <div
            style={{
                transform: `scaleX(${percent / 100})`,
                transformOrigin: "left"
              }}
            >
            </div>
        </div>
    )
}

export default Bar
