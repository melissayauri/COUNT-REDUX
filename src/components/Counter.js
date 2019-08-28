import React from 'react';
import { connect } from 'react-redux';
import  './counter.css';

class Counter extends React.Component {
  //state = { count: 0 }

  increment = () => {
    /*this.setState({
      count: this.state.count + 1
    });*/
    this.props.dispatch({type:'INCREMENT'})
  }

  decrement = () => {
    this.props.dispatch({type:'DECREMENT'})
   /* this.setState({
      count: this.state.count - 1
    });*/
  }
  refresh = () => {
    this.props.dispatch({type:'REFRESH'})
   /* this.setState({
      count: this.state.count - 1
    });*/
  }
  /*<p id="display">{this.state.count}</p>*/
  render() {
    return (
        <div id="counter-app">
        <div id="display-container" className="container">
          <p id="display">{this.props.count}</p>
        </div>
        <div id="buttons-container" className="container">
          <button id="increment-button" className="button" onClick={this.increment}><i className="fa fa-plus"></i>+</button>
          <button id="decrement-button" className="button" onClick={this.decrement}><i className="fa fa-minus"></i>-</button>
          <button id="reset-button" className="button"  onClick={this.refresh}><i className="fa fa-refresh"></i>X</button>
        </div>
      </div>
    )
  }
}

//export default Counter;

function mapStateToProps(state){
  return{
    count: state.count
  }
}
export default connect(mapStateToProps)(Counter)