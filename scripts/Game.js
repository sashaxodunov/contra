import Hero from "./Entities/Hero.js"
import Platform from "./Entities/Platform.js";

export default class Game{

    #pixiApp;
    #hero;              // герой
    #platforms = [];    // массив с платформами

    constructor(pixiApp){
        this.#pixiApp = pixiApp;

        this.#hero = new Hero();  // рисуем героя
        this.#hero.x = 200;
        this.#hero.y = 200;               /** задаем начальное местоположение героя */
        this.#pixiApp.stage.addChild(this.#hero);

        const platform1 = new Platform(); // рисуем платформу 1
        platform1.x = 100;
        platform1.y = 400;               
        this.#pixiApp.stage.addChild(platform1);

        const platform2 = new Platform(); // рисуем платформу 1
        platform2.x = 300;
        platform2.y = 500;               
        this.#pixiApp.stage.addChild(platform2);

        this.#platforms.push(platform1);   // записываем в массив платформу 1
        this.#platforms.push(platform2);   // записываем в массив платформу 2
    }

    update(){

        const prevPoint = { // сохраняем текущие положения 
            x:this.#hero.x, // по x
            y:this.#hero.y  // по y
        };

        this.#hero.update(); // обновление игры 

        for (let i=0; i<this.#platforms.length; i++){               // проходим циклом по каждой платформе и проверяем на столкновения 
            if (this.isCheckAABB(this.#hero, this.#platforms[i])){ // если герой встречается с платформой
                this.#hero.y = prevPoint.y;                              // то возвращается предыдущее значение
            } 
        }
        
    }


    // метод для обнаружения коллизии
    isCheckAABB(entity, area) {   // передаем два квадрата
        return (entity.x < area.x + area.width && // если левая сторона объекта левее чем правая сторона области
            entity.x + entity.width > area.x && // если правая сторона объекта правее чем левая сторона области
            entity.y < area.y + area.height && // если верхняя сторона объекта выше чем нижняя сторона области
            entity.y + entity.height > area.y); // если нижняя сторона объекта ниже чем верхняя сторона области
    }                                              // это значит что объект пересекается с областью
}