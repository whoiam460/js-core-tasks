




const Buttons = (props) =>{

    const {children,type,color, href}= props


    return(
        <>
        <button type={type} className={`btn btn-${color}`}>
            { (type === 'link') ? 
             <a href={href} target='_blank' rel="noreferrer">{children}</a> :
              children }
            
            </button>
        </>
    )
}

export default Buttons