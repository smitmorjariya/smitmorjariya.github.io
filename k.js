function breaktheTxt() {
    var h1 = document.querySelector("h1")
    var h1Txt = h1.textContent

    var splitedTxt = h1Txt.split("")
    var halfValue = splitedTxt.length / 2

    var clutter = ""

    splitedTxt.forEach(function (e, idx) {
        if (idx < halfValue) {
            clutter += `<span class="a">${e}</span>`

        }
        else {
            clutter += `<span class="b">${e}</span>`
        }
    })

    h1.innerHTML = clutter

}
breaktheTxt()

gsap.from("h1 .a", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    delay: 0.1,
    stagger: 0.15,
    repeat: -1,
    yoyo: true

})
gsap.from("h1 .b", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.1,
    stagger: -0.15,
    repeat: -1,
    yoyo: true

})