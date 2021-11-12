
import { useState } from 'react'

const TaskTen = () => {
  const [progres, setProgres] = useState(0)
  const wrapperWidth = 300
  let wrapperPercent = wrapperWidth / 100

  const add = () => {
    if (progres < wrapperWidth) setProgres(progres + wrapperPercent * 10)
  }

  const remove = () => {
    if (progres > 0) setProgres(progres - wrapperPercent * 10)
  }

  const getValue = e => {
    let value = e.target.value
    if (value <= 100) setProgres(value * wrapperPercent)
    else setProgres(100 * wrapperPercent)
  }

  return (
    <>
      <div
        style={{
          width: `${wrapperWidth}px`,
          height: '40px',
          border: '1px solid black',
          marginTop: '50px',
          overflow: 'hidden',
        }}>
        <div
          style={{
            width: `${progres}px`,
            height: '38px',
            backgroundColor: 'green',
          }}
        />
      </div>
      <input type="text" maxlength="3" onChange={getValue} />
      <div>
        <button onClick={add}>add 10%</button>
        <button onClick={remove}>remove 10%</button>
      </div>
    </>
  )
}

export default TaskTen
