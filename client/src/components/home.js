import React, { Component } from 'react';
import Api from '../Api';
import Grid from './grid';

class home extends Component {

    constructor(props){
        super(props);

        this.OpenSocket = this.OpenSocket.bind(this);
        this.CreateGame = this.CreateGame.bind(this);
        this.StartGame = this.StartGame.bind(this);
    }

    OpenSocket(){
        this.Api = new Api();
        this.Api.CreateSocket();
        this.Api.Emit("sendUid", 5000);
    }

    CreateGame(){
        fetch('/api/CreateGame', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                },
            body: JSON.stringify({userID: 5000, displayName: '6gav'}),
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
        });
    }

    StartGame(){
        fetch('/api/StartGame', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                },
            body: JSON.stringify({gameID: 2000 ,userID: 5000}),
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            this.setState({dummyState: null});
        });
    }


    render() {
        return (
            <div>
                <button onClick={this.OpenSocket} className="SocketButton">Open socket</button>
                <div className="StartButtons">
                    <button onClick={this.CreateGame}>Create game</button>      
                    <button onClick={this.StartGame}>Start game</button>
                </div>
                <Grid Api={this.Api}/>
            </div>
        );
    }
}

export default home;