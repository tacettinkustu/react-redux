import React, { Component } from 'react'

export default class FormDemo1 extends Component {
    state = {userName:""}

    onChangeHandler=(event)=>{
        this.setState({userName:event.target.value})
    };

    onSubmitHandler=(event)=>{

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <h3>Username</h3>
                    <input onChange={this.onChangeHandler} type="text" ></input>
                    <h3>Username is {this.state.userName}</h3>
                    <input type="submit" value="save"></input>
                </form>
            </div>
        )
    }
}
