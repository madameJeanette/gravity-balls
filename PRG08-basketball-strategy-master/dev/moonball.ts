class MoonBall extends Ball {
    behaviour: Behaviour;
    constructor(minWidth : number, maxWidth : number) {
        super(minWidth, maxWidth)
        this.behaviour = new MoonBouncing(this)
    }

    public update() : void {
        this.draw()
        this.behaviour.update()
        
    }
}

window.customElements.define("moonball-component", MoonBall)