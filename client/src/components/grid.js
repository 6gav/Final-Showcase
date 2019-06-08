import React, { Component } from 'react';
import Api from '../Api';

class grid extends Component {
    state = {

    }
    constructor(props){
        super(props);

    }

    StartTimer(){
        setInterval(() => this.GetMap(), 200);
    }

    componentWillReceiveProps(props){
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

    let list = [];
    map.forEach(column => {
        let row = [];
        column.forEach(item => {
            if(item.objects){
                let char = item.objects[0];
                let playerFlag = 0;
                if(char.type === "bot"){
                    playerFlag = 0;
                }
                else {
                    playerFlag = 1;
                }

                let style = {color: "rgb(" + 1.5*char.health + ", 0, " + 255*playerFlag +")"};
                
                
                
                if(char.health > 0){
                    row.push(<td style={style}>#</td>);

                }
                else {
                    row.push(<td style={style}>ㅃ</td>);
                }
            }
            else{
                row.push(<td>_</td>);
            }
        })
        row = (<tr>{row}</tr>)
        list.push(row);
    });

    return(<table><tbody>{list}</tbody></table>);

}

export default grid;