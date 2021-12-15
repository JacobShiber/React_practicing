import React from 'react'; 

export default class AddCan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {canName : "", addedCan : "", canArray : []};
        this.getCan  = this.getCan.bind(this);
        this.addCan = this.addCan.bind(this);
    }

    getCan(event){
        this.setState({canName : event.target.value})
    }

    addCan(){
        this.setState({addedCan : this.state.canName});
        this.setState({canArray : this.state.canArray.concat(this.state.canName)});
        
    }

    render() {
        return (
            <div>
                <h2>Add Can</h2>
                <input type="text" placeholder="Add Can" onChange={this.getCan}></input>
                <p>{this.state.addedCan}</p>
                <button onClick={this.addCan}>Add</button>
                <ul>
                <h3>Cans</h3>
                    {this.state.canArray.map((can) => (
                        <li>{can}</li>
                    ))}
                </ul>
            </div>
        )
    }
}