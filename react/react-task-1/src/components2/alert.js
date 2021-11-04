



const Alert = (props) => {
const {children, color} = props


    return(
        <>
        <div class={`alert alert-${color}`} role="alert">
          {children}
        </div>
        </>
    )
}

export default Alert