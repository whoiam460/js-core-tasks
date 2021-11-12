import { useState } from 'react'

import one from '../img/one.jpeg'
import two from '../img/two.jpeg'
import three from '../img/three.jpeg'

const TaskThree = () => {
  const [img, setImg] = useState(1)
  const images = [
    {
      img: one,
      id: 1,
    },
    {
      img: two,
      id: 2,
    },
    {
      img: three,
      id: 3,
    },
  ]
  console.log()

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <button
        onClick={() => (img <= 1 ? setImg(images.length) : setImg(img - 1))}>
        Prev
      </button>

      {images.map(item => {
        return item.id == img ? <img src={item.img} id={item.id} /> : null
      })}

      <button
        onClick={() => (img > images.length - 1 ? setImg(1) : setImg(img + 1))}>
        Next
      </button>
    </div>
  )
}

export default TaskThree
