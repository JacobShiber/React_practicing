import React from 'react'; 

export default class AddSpice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {spiceName : "", addedSpice : "", spiceArray : []};
        this.getSpice  = this.getSpice.bind(this);
        this.addSpice = this.addSpice.bind(this);
    }

    getSpice(event){
        this.setState({spiceName : event.target.value})
    }

    addSpice(){
        this.setState({addedSpice : this.state.spiceName});
        this.setState({spiceArray : this.state.spiceArray.concat(this.state.spiceName)});
        
    }

    render() {
        return (
            <div>
                <h2>Add Spice</h2>
                <input type="text" placeholder="Add Spice" onChange={this.getSpice}></input>
                <p>{this.state.addedSpice}</p>
                <button onClick={this.addSpice}>Add</button>
                <ul>
                    <h3>Spices</h3>
                    {this.state.spiceArray.map((spice) => (
                        <li>{spice}</li>
                    ))}
                </ul>
            </div>
        )
    }
}