import { useState } from 'react'

const TaskSeven = props => {
  const { name, array } = props
  const [show, setShow] = useState(false)

  return (
    <>
      <button onClick={() => setShow(!show)}>{name}</button>
      <div style={{ display: `${show === true ? 'block' : 'none'}` }}>
        <div
          style={{ display: 'flex', flexDirection: 'column', width: '120px' }}>
          {array.map(item => {
            return (
              <button style={{ height: '30px', border: 'none' }}>{item}</button>
            )
          })}
        </div>
      </div>
    </>
  )
}



export default TaskSeven
