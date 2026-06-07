//Dado N caras

function tirardado(numCaras) {
    return Math.floor(Math.random() * numCaras) + 1;
};

console.log(tirardado(6)); 