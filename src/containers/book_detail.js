import React, {Component} from 'react';
import {connect} from 'react-redux'

class BookDetail extends Component
{
    render()
    {
       if(!this.props.b){
           return <div>Loading....</div>
       }
       return (<div>{this.props.b.title}</div>)
    }
}
function mapStateToProps(state) {
    return{
        b:state.selectBook
    };
}
export default connect(mapStateToProps)(BookDetail);
