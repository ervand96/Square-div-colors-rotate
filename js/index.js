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
    const glbSquare = document.querySelector('.glbSquare');
    const glbChild = glbSquare.children;
    if (glbChild.length) {
        for (let i = 0; i < glbSquare.children.length; i++) {
            glbSquare.children[i].style.backgroundColor = arrayColor[i].color;
        }
    }
}

function changeColor() {
    const glbSquare = document.querySelector('.glbSquare');
    degCount += 90;
    if (degCount >= 360) {
        degCount = 0;
    }
    glbSquare.style.transform = `rotate(${degCount}deg)`;
}

changeColorButton();