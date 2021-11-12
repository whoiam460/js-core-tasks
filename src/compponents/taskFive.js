import { useState } from 'react'

const TaskFive = () => {
  const [text, setText] = useState('')
  console.log(text)

  function getValue(e) {
    setText(e.target.value)
  }
  return (
    <>
      <input onChange={getValue} value={text} minLength="3" maxlength="5" />
      {text.length < 3 ? (
        <span>Need minimum 3</span>
      ) : text.length === 5 ? (
        <span>maximum 5</span>
      ) : null}
    </>
  )
}
export default TaskFive
