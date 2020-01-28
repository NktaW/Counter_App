import React, { Component } from "react";

class Counter extends Component {
 
  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  render() {
    //let Create if the count is more than 0 , colour should change
    return (
      <div>
        {this.props.children}
        {/*Using Inline Style*/}
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          style={{ fontSize: 20, width: 300, height: 40 }}
          className="btn btn-success btn-sm btn-block"
        >
          Increment
        </button>

        {/*Using Custom Style*/}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <br />
        {/*this.state.tags.length === 0 && "Please create new tags!"*/}
        {/*this.renderTags()*/}

        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          style={{ fontSize: 20, width: 300, height: 40 }}
          className="btn btn-info btn-sm btn-block"
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          style={{ fontSize: 20, width: 200, height: 40 }}
          className="btn btn-danger btn-sm btn-block"
        >
          Delete
        </button>
      </div>
    );
  }

  

  getBadgeClasses() {
    let classes = "m-3 badge badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    //Object destructing
    const { value } = this.props.counter;
    return value === 0 ? "0" : value;
  }
}

export default Counter;
