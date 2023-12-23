import { Container, Graphics } from "../../pixi/pixi.mjs";

export default class Hero extends Container{

    #GRAVITY_FORCE = 1; // делаем гравитацию для героя

    constructor(){
        super();                        // вызов конструктора родительского класса

        const view = new Graphics();
        view.lineStyle(1, 0xff0000);
        view.drawRect(0,0,20,60);
        
        this.addChild(view);
    }

    update(){
        this.y += this.#GRAVITY_FORCE; // В каждом кадре добавляет переменную #GRAVITY_FORCE
    }
}