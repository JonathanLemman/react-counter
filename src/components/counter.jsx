import React, { Component } from "react";

class Counter extends Component {
    state = {
        value: this.props.value
        // tags: ['tag1', 'tag2', 'tag3']
    };

    // ------------------- One Way of binding this ---------------------
    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // -------------------- Second way of binding this is with arrow function ------------
    handleIncrement = () => {
        this.setState({ value: this.state.value + 1})
    };

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={ this.handleIncrement } className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += this.state.value === 0 ? "badge-warning" : "badge-primary";
        return classes;
    }

    formatCount() {
        const { value } = this.state;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;