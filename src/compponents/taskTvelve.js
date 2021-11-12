import React, { useState } from 'react'

const TaskTvelve = props => {
  const { countArticles, limit } = props
  let countPage = Math.ceil(countArticles / limit)

  let [value, setValue] = useState(false)

  const toggle = i => {
    if (value !== i) {
      return setValue(i)
    }
  }

  const renderElements = [...Array(countPage)].map((item, i) => {
    i += 1
    return (
      <li className="page-item">
        <a
          className="page-link"
          href={`#${value}`}
          onClick={() => toggle(i)}
          style={{ color: value == i ? '#000' : '#d33' }}>
          {i}
        </a>
      </li>
    )
  })

  return (
    <div style={{ display: 'flex' }}>
      <li
        onClick={() => setValue((value -= 1))}
        style={{ display: `${value == 1 ? 'none' : 'block '}` }}
        className="page-item">
        <a className="page-link" href="#">
          Previous
        </a>
      </li>
      <ul className="pagination">{renderElements}</ul>

      <li
        onClick={() => setValue((value += 1))}
        style={{
          display: `${value == renderElements.length ? 'none' : 'block'}`,
        }}
        className="page-item">
        <a className="page-link" href="#">
          Next
        </a>
      </li>
    </div>
  )
}

export default TaskTvelve
