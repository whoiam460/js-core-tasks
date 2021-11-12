import { useState } from 'react'

const Component1 = () => {
  
  const [countSecond, setCountSecond] = useState(0)
  const [countThird, setCountThird] = useState(0)
  const [countFourth, setCountFourth] = useState(0)

  return (
    <>
      <p>
        {' '}
        {countSecond < 10
          ? `${countSecond} - меньше 10`
          : countSecond === 10
          ? `${countSecond} - равно 10`
          : `${countSecond} больше 10`}
      </p>

      <button onClick={() => setCountSecond(countSecond + 1)}>+</button>

      <p>{countThird}</p>

      <button onClick={() => setCountThird(countThird + 1)}>+</button>
      <button onClick={() => setCountThird(countThird - 1)}>-</button>

      <p>{countFourth}</p>
      <button onClick={() => setCountFourth(countFourth + 1)}>+1</button>
      <button onClick={() => setCountFourth(countFourth + 5)}>+5</button>

      <button onClick={() => setCountFourth(countFourth + 10)}>+10</button>
      <button onClick={() => setCountFourth(countFourth * countFourth)}>
        mul
      </button>
    </>
  )
}


export default Component1
