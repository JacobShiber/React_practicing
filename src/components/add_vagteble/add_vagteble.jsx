import React from 'react'; 

export default class AddVagteble extends React.Component {
    constructor(props) {
        super(props);
        this.state = {vagtebleName : "", addedVag : "", vegArray : []};
        this.getVagteble  = this.getVagteble.bind(this);
        this.addVagteble = this.addVagteble.bind(this);
    }

    getVagteble(event){
        this.setState({vagtebleName : event.target.value})
    }

    addVagteble(){
        this.state.vegArray.push(this.state.vagtebleName);
        this.setState({addedVag : this.state.vagtebleName});
    }

    render() {
        return (
            <div>
                <h2>Add Vagteble</h2>
                <input type="text" placeholder="Add Vagteble" onChange={this.getVagteble}></input>
                <p>{this.state.addedVag}</p>
                <button onClick={this.addVagteble}>Add</button>
                <ul>
                <h3>Vagtebles</h3>
                    {this.state.vegArray.map((veg) => (
                        <li>{veg}</li>
                    ))}
                </ul>
            </div>
        )
    }
}