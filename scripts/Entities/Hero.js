import { Container, Graphics } from "../../pixi/pixi.mjs";

export default class Hero extends Container{

    constructor(){
        super();                        // вызов конструктора родительского класса

        const view = new Graphics();
        view.lineStyle(1, 0xff0000);
        view.drawRect(0,0,20,60);
        
        this.addChild(view);
    }
}