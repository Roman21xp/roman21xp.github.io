function tirarDado(numeroCaras) {
  return Math.floor(Math.random() * numeroCaras) + 1;
}
const resultado = tirarDado(6);
console.log("Resultado del dado:", resultado);