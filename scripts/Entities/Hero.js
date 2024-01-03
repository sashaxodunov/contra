import { Container, Graphics } from "../../pixi/pixi.mjs";

export default class Hero extends Container{

    #GRAVITY_FORCE = 0.1; // делаем гравитацию для героя
    #velocityX = 0; // скорость по X
    #velocityY = 0; // скорость по Y

    constructor(){
        super();                        // вызов конструктора родительского класса

        const view = new Graphics();
        view.lineStyle(1, 0xff0000);
        view.drawRect(0,0,20,60);
        
        this.addChild(view);
    }

    update(){
        this.#velocityY += this.#GRAVITY_FORCE; // В каждом кадре увеличивается скорость
        this.y += this.#velocityY; // В каждом кадре добавляет переменную #GRAVITY_FORCE движение по вертикали
    }

    stay(){
        this.#velocityY = 0; // сбрасывает скорость по Y до 0
    }
}