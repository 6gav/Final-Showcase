import React, { Component } from 'react';
import OpenSocket from 'socket.io-client';


export default class Api {


    CreateSocket(){
        this.socket = OpenSocket();

        this.RegisterApiRoutes();
    }

    Emit(tag, data){
        this.socket.emit(tag, data);
    }

    RegisterApiRoutes(){

        this.socket.on("map", (map) => {
            this.map = map;
        });

    }

    GetMap(){
        return this.map;
    }

}