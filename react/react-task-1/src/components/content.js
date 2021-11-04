
import { Alert,Buttons,Cards,Bredcrams,Title,Input,Rating, Tags, Pagination } from "../components2"

const Content = () =>{


    return(
        <>
         <Alert color = 'danger'>
             <h1>Your Alert</h1>
         </Alert>
         <Buttons type = 'submit' color= 'primary' href='https://react-bootstrap.github.io/getting-started/introduction/'>
             <p>My button</p>
         </Buttons>
         <Cards hrf = 'https://codesandbox.io/s/quizzical-austin-o34jr?file=/src/App.js'></Cards>
         <Bredcrams nav= {[{title:'news',link:'kkk'},{title:'news1',link:'klk'}, {title:'news2',link:'kll'},{title:'news3',link:'lll'}]}></Bredcrams>
<Title color ="red" size ="15px">Mytytle</Title>
  <Input type='' placeholder = "kjnsfdkjsn" value='skdfskjdf' />
  <Rating maxStars='5' selectStars = '3'/>
<Tags tags ={ [
        {title: 'Tag №1', href:'#1'},
        {title: 'Tag №2', href:'#2'},
        {title: 'Tag №3', href:'#3'},
    ]}/>


  <Pagination countArticles ='10' limit='2'></Pagination>
   
        </>
    )
}

export default Content