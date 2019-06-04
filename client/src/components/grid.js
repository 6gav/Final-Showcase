import React, { Component } from 'react';
import Api from '../Api';

class grid extends Component {
    state = {

    }
    constructor(props){
        super(props);
        console.log(props);

    }

    StartTimer(){
        setInterval(() => this.GetMap(), 1000);
    }

    componentWillReceiveProps(props){
        console.log(props);
        if(props.Api){
            
            this.setState({Api: props.Api});
            setTimeout(() => this.StartTimer(), 0);
        }
    }

    GetMap(){
        this.state.Api.Emit("getMap", {uid: 5000, gameID: 2000});
        this.setState({map: this.state.Api.GetMap()});
    }

    render() {
        return (
            <div>
                <Table map={this.state.map}/>
            </div>
        );
    }
}

function Table(props){
    let map = props.map;
    if(!map){
        return null;
    }

}

export default grid;