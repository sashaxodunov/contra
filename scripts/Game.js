import Hero from "./Entities/Hero.js"

export default class Game{

    #pixiApp;

    constructor(pixiApp){
        this.#pixiApp = pixiApp;
        this.#pixiApp.stage.addChild(new Hero());
    }
}