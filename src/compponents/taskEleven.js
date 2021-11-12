
import { useState } from 'react'

const TaskEleven = props => {
  const { array } = props
  const [link, setLink] = useState(null)

  const selectItem = href => {
    if (link == href) {
      return null
    }
    return setLink(href)
  }

  const elements = () => {
    return array.map(item => (
      <li style={{ padding: '5px' }}>
        <a
          href={item.href}
          onClick={() => selectItem(item.href)}
          style={{
            textDecoration: `${item.href == link ? 'underline' : 'none'}`,
          }}>
          {item.title}
        </a>
      </li>
    ))
  }

  return (
    <div>
      <ul style={{ display: 'flex', listStyle: 'none' }}>{elements()}</ul>
    </div>
  )
}
export default TaskEleven
