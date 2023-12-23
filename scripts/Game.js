import Hero from "./Entities/Hero.js"
import Platform from "./Entities/Platform.js";

export default class Game{

    #pixiApp;

    constructor(pixiApp){
        this.#pixiApp = pixiApp;

        const hero = new Hero();  // рисуем героя
        hero.x = 200;
        hero.y = 200;               /** задаем начальное местоположение героя */
        this.#pixiApp.stage.addChild(hero);

        const platform = new Platform(); // рисуем платформу
        platform.x = 100;
        platform.y = 300;               /** задаем начальное местоположение героя */
        this.#pixiApp.stage.addChild(platform);
    }
}