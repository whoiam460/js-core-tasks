
import { useState } from "react"


const TaskFour =() =>{

    const[visible, setVisible]= useState('block')

console.log(visible);


    return(
        <>
        <div onClick ={() => setVisible('none')} style ={{width:'50px',height:'50px',backgroundColor:'green', display:`${visible}`}}>

        </div>
        <div style ={{width:'50px',height:'50px',backgroundColor:'blue'}}>

        </div>
{
     (visible ==='none')?  <div onClick ={() => setVisible('block')} style ={{width:'50px',height:'50px',backgroundColor:'red'}}>

        </div>: null
}
        </>
    )
}

export default TaskFour