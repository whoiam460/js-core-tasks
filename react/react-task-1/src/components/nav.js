


const Nav = (props) =>{
    const{nav} = props;
    



    return(<>
      <nav>
          <ul>
              <li>
                 { nav.map(item =>  <a href={item.link}> {item.title} </a>)}
                 </li>
              
          </ul>
      </nav>
    </>)
}
export default Nav