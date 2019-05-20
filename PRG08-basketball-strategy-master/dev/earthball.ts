class EarthBall extends Ball{
    behaviour: Behaviour;
    constructor(minWidth : number, maxWidth : number) {
        super(minWidth, maxWidth)
        this.behaviour = new EarthBouncing(this)
    }

    public update() : void {
        this.draw()
        this.behaviour.update()
       
    }
}

window.customElements.define("earthball-component", EarthBall)