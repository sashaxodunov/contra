
import Game from "./Game.js"
import * as PIXI from "../pixi/pixi.mjs" // подключаем файл pixi.mjs

/* создаем инстанс - игровая зона, изолированная от других локаций, которая предназначена для прохождения 
   отдельными игроками или группами игроков */
const _pixiApp = new PIXI.Application({
    width: 1024, // передаем параметр ширины
    height: 768, // передаем параметр высоты
}); 
console.log(_pixiApp);

const game = new Game(_pixiApp);
_pixiApp.ticker.add(game.update, game);
document.body.appendChild(_pixiApp.view); 

