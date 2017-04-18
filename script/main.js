/* global g, module */

function main() {
    const scene = new g.Scene({game: g.game});
    scene.loaded.handle(() => {
        const machine = new Machine(scene);
        scene.append(machine);
    });
    g.game.pushScene(scene);
}

class Machine extends g.FilledRect {
    constructor(scene) {
        super({
            scene: scene,
            cssColor: "#0000aa",
            width: 10,
            height: 10
        });
        this.update.handle(() => {
        });
    }
}

module.exports = main;
