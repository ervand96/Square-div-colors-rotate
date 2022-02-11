const arrayColor = [
    {
        id: 1,
        color: "yellow"
    },
    {
        id: 2,
        color: "black"
    },
    {
        id: 3,
        color: "red"
    },
    {
        id: 4,
        color: "orange"
    }
];

function changeColorButton() {

    let glbSquare = document.querySelectorAll('.glbSquare');
    let glbSquareTwo = document.querySelector('.glbSquareTwo');
    glbSquare[0].innerHTML = "";
    glbSquare[1].innerHTML = "";
    glbSquareTwo.innerHTML = "";

    for (let i = 0; i < arrayColor.length; i++) {
        const square = document.createElement('div');
        square.classList.add('square')
        square.style.backgroundColor = arrayColor[i].color;
        if ((i + 1) % 2 == 0) {
            glbSquareTwo.prepend(square)
        } else {
            glbSquare[i / 2].append(square)
        }
    }

}
function changeColor() {
    arrayColor.unshift(arrayColor.pop());
    changeColorButton();
}
changeColorButton()