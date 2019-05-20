class BasketBall extends Ball {
behaviour: Behaviour;
    constructor(minWidth: number, maxWidth: number) {
        super(minWidth, maxWidth)
        this.behaviour = new EarthBouncing(this)
        this.behaviour= new MoonBouncing(this)


    }

    public update(): void {
        if (this.x < window.innerWidth / 2) {
           this.draw()
           this.behaviour.update()

        } else {
            this.draw()
            this.behaviour.update()

            }

           
        }
    }


window.customElements.define("basketball-component", BasketBall)