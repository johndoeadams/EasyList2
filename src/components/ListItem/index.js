import React,{Component} from "react";

class ListItem extends Component {
    // function ListItem(props){

    componentDidMount() {
        console.log(this.props.handleClick)
    }

    //     
    // }
    render() {

        return (
            <div className="text-center" 
            style={this.props.style}
            >
                <div>
                    {this.props.text}
                </div>
            </div>
        )
    }
}

export default ListItem;