import React, { memo } from 'react'

const Child = ({ greet }) => {
  console.log('Hello Jenish');
  return (
    <div>

      <button onClick={greet}>Conor Mcgregor</button>

    </div>
  )
}

export default memo(Child)
