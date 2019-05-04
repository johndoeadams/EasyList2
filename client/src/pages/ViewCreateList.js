import React, { Component } from "react";
import { Link } from 'react-router-dom'

class ViewCreateList extends Component{

    state={

    }

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    componentDidMount() {
        // Load items from items collection
        
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }

      handleSubmit(event) {
        event.preventDefault();
        this.props.createNewList();
      }

      handleAddItem(event){
        event.preventDefault();
      }

      render(){
       
          return(
                <div>
               

                    <div className="Jumbotron">
                        <h2>Create a new list from available items</h2>
                    </div>
                    <div className="form-group">
                        <form onSubmit={this.handleSubmit}>
                        <label>
                        List Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <ul className="list-group">
                        {
                            this.props.items && 
                            this.props.items.map(item=>{
                            return <li key={item.itemName} className="list-group-item btn-sm" onClick={this.handleAddItem}>{item.itemName}</li>
                        })
                        }
                        </ul>
                        <input className="form-control" type="submit" value="Submit" onClick={this.handleSubmit}/>
                    </form>
                    </div>
                    <div ><Link className="btn btn-lg btn-primary btn-block" to="/control">RETURN TO CONTROL</Link></div>

                </div>
          );
      }
}

export default ViewCreateList;