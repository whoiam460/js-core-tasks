
import { useState } from 'react'

const TaskEight = props => {
  const { array } = props

  const [indexVisible, setIndexVisible] = useState(2)

  return (
    <>
      <div>
        {array.map((item, i) => {
          return i < indexVisible ? (
            <div style={{ margin: '10px auto', width: '285px' }}>{item.h}</div>
          ) : (
            false
          )
        })}
      </div>

      <button
        style={{
          display: `${indexVisible <= array.length ? 'block' : 'none'}`,
        }}
        onClick={() => setIndexVisible(indexVisible + 2)}>
        show more
      </button>
    </>
  )
}

export default TaskEight
