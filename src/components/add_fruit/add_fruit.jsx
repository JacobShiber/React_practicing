import React from 'react';

export default class AddFruit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {fruitName : "", addedFruit : "", fruitArray : []};
        this.getFruit  = this.getFruit.bind(this);
        this.addFruit = this.addFruit.bind(this);
    }

    getFruit(event){
        this.setState({fruitName : event.target.value})
    }

    addFruit(){
        this.setState({addedFruit : this.state.fruitName});
        this.setState({fruitArray : this.state.fruitArray.concat(this.state.fruitName)}); 
    }

    render() {
        return (
            <div>
                <h2>Add Fruit</h2>
                <input type="text" placeholder="Add Fruit" onChange={this.getFruit}></input>
                <p>{this.state.addedFruit}</p>
                <button onClick={this.addFruit}>Add</button>
                <ul>
                <h3>Fruits</h3>
                    {this.state.fruitArray.map((fruit) => (
                        <li>{fruit}</li>
                    ))}
                </ul>
            </div>
        )
    }
}