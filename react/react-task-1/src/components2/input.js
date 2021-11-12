


const Input = (props) =>{
    const{type,placeholder,value}= props



    return (
        <>
         <input type={type} placeholder={placeholder} value={value} className='form-control'/>
        </>
    )
}

export default Input