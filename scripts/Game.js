import Hero from "./Entities/Hero.js"
import Platform from "./Entities/Platform.js";

export default class Game{

    #pixiApp;
    #hero;
    #platform;

    constructor(pixiApp){
        this.#pixiApp = pixiApp;

        this.#hero = new Hero();  // рисуем героя
        this.#hero.x = 200;
        this.#hero.y = 200;               /** задаем начальное местоположение героя */
        this.#pixiApp.stage.addChild(this.#hero);

        this.#platform = new Platform(); // рисуем платформу
        this.#platform.x = 100;
        this.#platform.y = 500;               /** задаем начальное местоположение героя */
        this.#pixiApp.stage.addChild(this.#platform);
    }

    update(){
        this.#hero.update(); // обновление игры 

        this.isCheckAABB(this.#hero, this.#platform); // проверяем на столкновения героя и платформу
    }


    // метод для обнаружения коллизии
    isCheckAABB(entity, area) {   // передаем два квадрата
        return (entity.x < area.x + area.width && // если левая сторона объекта левее чем правая сторона области
            entity.x + entity.width > area.x && // если правая сторона объекта правее чем левая сторона области
            entity.y < area.y + area.height && // если верхняя сторона объекта выше чем нижняя сторона области
            entity.y + entity.height > area.y); // если нижняя сторона объекта ниже чем верхняя сторона области
    }                                              // это значит что объект пересекается с областью
}