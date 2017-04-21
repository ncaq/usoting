/* global g, module */

class Machine extends g.FilledRect {
    constructor(scene) {
        super({
            scene: scene,
            cssColor: "#0000aa",
            width: 10,
            height: 10
        });
        this.update.handle(() => {
            if(keyboard.get("ArrowLeft")) {
                if(0 < this.x) {
                    this.x -= 5;
                }
            }
            if(keyboard.get("ArrowRight")) {
                if(this.x + this.width < g.game.width) {
                    this.x += 5;
                }
            }
            if(keyboard.get("ArrowUp")) {
                if(0 < this.y) {
                    this.y -= 5;
                }
            }
            if(keyboard.get("ArrowDown")) {
                if(this.y + this.height < g.game.height) {
                    this.y += 5;
                }
            }
            keyboard.clear();
            this.modified();
        });
    }
}

class Keyboard extends Map {
    constructor() {
        super();
        document.addEventListener("keydown", (keyboardEvent) => this.set(keyboardEvent.code, true));
    }
}

const keyboard = new Keyboard();

function main() {
    const scene = new g.Scene({game: g.game});
    scene.loaded.handle(() => {
        const machine = new Machine(scene);
        machine.x = g.game.width / 2;
        machine.y = g.game.height - machine.height;
        scene.append(machine);
    });
    g.game.pushScene(scene);
}

module.exports = main;
