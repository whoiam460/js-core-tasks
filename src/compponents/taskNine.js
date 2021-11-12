import { useState } from 'react'

const TaskNine = props => {
  const { array } = props
  const [showText, setShowText] = useState(null)

  const selectItem = i => {
    if (i === showText) {
      return setShowText(false)
    }
    setShowText(i)
  }

  return (
    <div style={{ marginTop: '20px' }}>
      {array.map((item, i) => {
        console.log({ i })
        return (
          <div>
            <span style={{ display: `${showText === i ? 'block' : 'none'}` }}>
              {item}
            </span>

            <button
              style={{ display: `${showText === i ? 'none' : 'block'}` }}
              onClick={() => selectItem(i)}>
              showText
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default TaskNine
