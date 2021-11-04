


const Title = (props) => {
    const{children,size,color= 'black'}= props


    return (
        <>
          <h1 style ={{fontSize:`${size}`, color: `${color}`}}>{children}</h1>
        </>
    )
}
export default Title 