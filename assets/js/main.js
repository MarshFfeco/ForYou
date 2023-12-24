class Main {
    title = document.getElementById("title")
    image = document.getElementById("image")
    button_click = document.getElementById("click")
    button_roll = document.getElementById("roll")
    button_reverser = document.getElementById("reverse")

    constructor() {
        this.DisplayDisappear(this.image)
        this.DisplayDisappear(this.button_roll)
        this.DisplayDisappear(this.button_reverser)

        this.button_click.addEventListener("click", () => this.ButtonClick())
        this.button_roll.addEventListener("click", () => this.RollImage())
        this.button_reverser.addEventListener("click", () => this.ReverseImage())
    }

    ButtonClick() {
        this.DisplayDisappear(this.title)
        this.DisplayAppear(this.image)
        this.DisplayDisappear(this.button_click)
        this.DisplayAppear(this.button_roll)
        this.DisplayAppear(this.button_reverser)
    }

    RollImage() {
        gsap.fromTo(this.image, { rotation: 0 }, { rotation: 360 })
    }

    ReverseImage() {
        gsap.fromTo(this.image, { rotation: 360 }, { rotation: 0 })
    }

    DisplayDisappear(element) {
        element.style.display = "none";
    }

    DisplayAppear(element) {
        element.style.display = "block"
    }

}

new Main()