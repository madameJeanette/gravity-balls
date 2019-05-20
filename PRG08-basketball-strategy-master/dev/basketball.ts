class BasketBall extends Ball {
    behaviour: Behaviour;
    constructor(minWidth: number, maxWidth: number) {
        super(minWidth, maxWidth)
        this.behaviour = new EarthBouncing(this)


    }

    public update(): void {
        if (this.x < window.innerWidth / 2) {
            this.behaviour = new EarthBouncing(this)
            this.draw()
            this.behaviour.update()

        } else {
            this.behaviour = new MoonBouncing(this)
            this.draw()
            this.behaviour.update()

        }
    }


}



window.customElements.define("basketball-component", BasketBall)