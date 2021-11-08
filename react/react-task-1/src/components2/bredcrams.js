


const Bredcrams = (props) => {

    const{nav}= props
     const elements = nav.map(item =>{ return(
        <li class="breadcrumb-item"><a className="breadcrumb" href={item.link}>{item.title}</a></li>
    ) } )

    return(
        <>
          <nav aria-label="breadcrumb">
       <ol className="breadcrumb">
    {elements}
  </ol>
</nav>
        </>
    )
}

export default Bredcrams