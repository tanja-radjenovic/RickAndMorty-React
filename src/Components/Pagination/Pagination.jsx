import React, {Component} from "react";
import "./pagination.scss"

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pagArr: []
         }
    }

   componentDidMount() {
       this.changeArr()
   }

   componentDidUpdate(prevProps, prevState) {
       if (prevProps.activePage !== this.props.activePage) {
           this.changeArr()
           
       }
   }

changeArr(){
    if (this.props.activePage > 0 && this.props.activePage < 4) {
        this.setState(
            {pagArr : [1,2,3,4,5]}
        )
    }
    if (this.props.activePage >=4 && this.props.activePage <= 39 ) {
        this.setState({
            pagArr: [this.props.activePage - 2, this.props.activePage - 1, this.props.activePage, this.props.activePage + 1, this.props.activePage + 2]
        })
    }
    if (this.props.activePage >= 40){
this.setState({
    pagArr: [38,39,40,41,42]
})
    }
}

    render() { 
        console.log(this.props.activePage)
        return ( <div className="pagination">
            <button onClick={() => this.props.umanji()}> - </button>
            {this.state.pagArr.map(e => <button onClick={() => this.props.setActivePage(e)}>{e}</button> )}
            <button onClick={() => this.props.povecaj()}> + </button>
            </div> );
    }
}
 
export default Pagination;