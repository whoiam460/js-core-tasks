
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

import './taskThirteen.css'

const TaskThirteen = ({ maxStars }) => {
  const [value, setValue] = useState(null)

  return (
    <div>
      {[...Array(+maxStars)].map((item, i) => {
        let ratingValue = i + 1
        return (
          <label>
            <input
              style={{}}
              type="radio"
              name="Task13"
              value={ratingValue}
              onClick={() => setValue(ratingValue)}
            />
            <FaStar color={ratingValue <= value ? '#FFD700' : '#808080'} />
          </label>
        )
      })}
    </div>
  )
}

export default TaskThirteen
