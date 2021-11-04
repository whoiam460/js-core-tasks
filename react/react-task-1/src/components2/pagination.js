


const Pagination = ({countArticles, limit}) =>{
    let countPage = Math.ceil(countArticles/limit);
    return(
        <>
            <nav>
        <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
 
            { [...Array(countPage)].map( (item, i) => <li className="page-item"><a className="page-link" href="#">{i+1}</a></li> ) }    
           
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
        </ul>
    </nav>
        </>
    )
}
export default Pagination;