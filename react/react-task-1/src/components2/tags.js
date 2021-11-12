


const Tags =(props ) =>{

    const{tags}= props 

    return(
        <>
        <div>
          {tags.map(item => <div href ={item.href}>{item.title}</div>)}
        </div>
        </>
    )
}
export default Tags