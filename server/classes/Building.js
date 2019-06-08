"use strict";

class Building {

    constructor(pos){
        this.pos = pos;
    }

    GenerateLoot(){
        this.loot = [];
    }

    GetLoot(){
        return this.loot;
    }

    

}

module.exports = Building;