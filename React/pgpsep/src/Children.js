import React, { memo, useState } from 'react'

 function Children() {
    const [counter,setCounter] = useState(0)
    console.log("Children Component")
  return (
    <div>
        <h1>Counter: {counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  )
}

export default memo(Children)
