import { useState } from "react"



const TaskTwo = () => {
    const[show, setShow] = useState('show')
    return (
        <div>
            <button onClick = {  () =>{(show === 'hide')? setShow('show') : setShow('hide') }}>
                {show}
            </button>
{


            (show === 'hide')?
            <p style = {{display:'block'}}>dlkfvjklsgfj</p> : ''
}
        </div>
    )
}


export default TaskTwo