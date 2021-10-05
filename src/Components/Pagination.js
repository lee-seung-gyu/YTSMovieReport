import React, {Component} from 'react';
import './Pagination.css'

class Pagination extends Component{
    constructor(props){
        super(props);
        this.state={
            loading:this.props.loading,
            movieLen:this.props.movieLen,
            postsPerPage:this.props.postsPerPage,
        }
    }
    setCurrentPage=(page)=>{
        alert(page);
        this.props.setCurrentPage(page);
    }
  
  render(){
      let pageNumbers=[];
      const {movieLen, postsPerPage}=this.props;
      for(let i=1; i<=Math.ceil(movieLen / postsPerPage); i++){
          pageNumbers.push(i);
      }
      console.log(pageNumbers);

      const pageList=pageNumbers.map(page=>(
          <span className="page" onClick={()=>this.setCurrentPage(page)}>
              {page}
          </span>
        )
      );
    return(
      <div id="Pagination">
        <div id="page_list">
            {pageList}
        </div>
      </div>
    );
  }
}

export default Pagination