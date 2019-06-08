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


    SendInput(input){
        let direction;

        switch (input) {
            case "Up":
                direction = {x: 0, y: -1};
                break;
            case "Down":
                direction = {x: 0, y: 1};
                break;
            case "Left":
                direction = {x: -1, y: 0};
                break;
            case "Right":
                direction = {x: 1, y: 0};                
                break;

            default:
                break;
        }

        let info = {uid: 5000, gameID: 2000, params: {type: "direction", direction: direction}}

        this.Api.Emit("pInput", (info));
    }

    render() {
        return (
            <div>
                <button onClick={this.OpenSocket} className="SocketButton">Open socket</button>
                <div className="StartButtons">
                    <button onClick={this.CreateGame}>Create game</button>      
                    <button onClick={this.StartGame}>Start game</button>
                </div>
                <div className="DirectionButtons">
                    <button onClick={() => this.SendInput("Up")}>Left</button>
                    <button onClick={() => this.SendInput("Down")}>Right</button>
                    <button onClick={() => this.SendInput("Left")}>Up</button>
                    <button onClick={() => this.SendInput("Right")}>Down</button>
                </div>
                <Grid Api={this.Api}/>
            </div>
        );
    }
}

export default home;