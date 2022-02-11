const arrayColor = [{
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

let degCount = 0;

function changeColorButton() {
    let glbSquare = document.querySelector('.glbSquare');

    for (let i = 0; i < glbSquare.children.length; i++) {
        glbSquare.children[i].style.backgroundColor = arrayColor[i].color;
    }

}

function changeColor() {
    let glbSquare = document.querySelector('.glbSquare');
    degCount += 90;
    glbSquare.style.transform = `rotate(${degCount}deg)`;
}

changeColorButton();