import {
  Component1,
  TaskTwo,
  TaskThree,
  TaskFour,
  TaskFive,
  TaskSix,
  TaskSeven,
  TaskEight,
  TaskNine,
  TaskTen,
  TaskEleven,
  TaskTwelve,
  TaskThirteen,
} from './compponents'
import './App.css'

function App() {
  return (
    <div className="App">
      <Component1 />
      <TaskTwo />
      <TaskThree />
      <TaskFour />
      <TaskFive />
      <TaskSix />
      <TaskSeven
        name="Dropdown Button"
        array={['Action', 'Another action', 'One more']}
      />
      <TaskEight
        array={[
          { h: 'card1', p: 'Pcard1', img: 'some Img1' },
          { h: 'card2', p: 'Pcard2', img: 'some Img2' },
          { h: 'card3', p: 'Pcard3', img: 'some Img3' },
          { h: 'card4', p: 'Pcard4', img: 'some Img4' },
          { h: 'card5', p: 'Pcard1', img: 'some Img1' },
          { h: 'card6', p: 'Pcard2', img: 'some Img2' },
          { h: 'card7', p: 'Pcard3', img: 'some Img3' },
        ]}
      />
      <TaskNine
        array={['oneText', 'twoText', 'threeText', 'FourText', 'FiveText']}
      />
      <TaskTen />
      <TaskEleven
        array={[
          { title: 'News', href: '#1' },
          { title: 'Product', href: '#2' },
          { title: 'Service', href: '#3' },
          { title: 'Contacts', href: '#4' },
        ]}
      />
      <TaskTwelve countArticles="10" limit="2" />
      <TaskThirteen maxStars ={7}/>
    </div>
  )
}

export default App
