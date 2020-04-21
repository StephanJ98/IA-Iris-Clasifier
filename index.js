/**
 * IA que permite conocer la probabilidad de que una planta pertenezca a una especie
 */
const brain = require('brain.js')
const fs = require('fs');
const config = {
    hiddenLayers: [60, 30, 10]
    /**
     * Define que la IA emplea 3 niveles de neuronas ocultos 
     * y que en cada capa hay 60 30 y 10 neuronas respectivamente
     */
}
const net = new brain.NeuralNetwork(config)
/**
 * Fase de entrenamiento
 */
net.train([
    { input: { sl: 5.1, sw: 3.5, pl: 1.4, pw: 0.2 }, output: { Setosa: 1 } },
    { input: { sl: 4.9, sw: 3.0, pl: 1.4, pw: 0.2 }, output: { Setosa: 1 } },
    { input: { sl: 4.7, sw: 3.2, pl: 1.3, pw: 0.2 }, output: { Setosa: 1 } },
    { input: { sl: 4.6, sw: 3.1, pl: 1.5, pw: 0.2 }, output: { Setosa: 1 } },
    { input: { sl: 5.0, sw: 3.6, pl: 1.4, pw: 0.2 }, output: { Setosa: 1 } },
    { input: { sl: 7.0, sw: 3.2, pl: 4.7, pw: 1.4 }, output: { Versicolor: 1 } },
    { input: { sl: 6.4, sw: 3.2, pl: 4.5, pw: 1.5 }, output: { Versicolor: 1 } },
    { input: { sl: 6.9, sw: 3.1, pl: 4.9, pw: 1.5 }, output: { Versicolor: 1 } },
    { input: { sl: 5.5, sw: 2.3, pl: 4.0, pw: 1.3 }, output: { Versicolor: 1 } },
    { input: { sl: 6.5, sw: 2.8, pl: 4.6, pw: 1.5 }, output: { Versicolor: 1 } },
    { input: { sl: 5.9, sw: 3.0, pl: 5.1, pw: 1.8 }, output: { Virginica: 1 } },
    { input: { sl: 6.2, sw: 3.4, pl: 5.4, pw: 2.3 }, output: { Virginica: 1 } },
    { input: { sl: 6.5, sw: 3.0, pl: 5.2, pw: 2.0 }, output: { Virginica: 1 } },
    { input: { sl: 6.3, sw: 2.5, pl: 5.0, pw: 1.9 }, output: { Virginica: 1 } },
    { input: { sl: 6.7, sw: 3.0, pl: 5.2, pw: 2.3 }, output: { Virginica: 1 } },
])
const output = net.run({ sl: 2.3, sw: 4, pl: 7, pw: 1 })
console.log(output)
/**
 * Crean una standalone function que es posible exportar a otros proyectos sin usar brain.js
 * La funcion generada habra que modificarla para que se parezca a function X(input){todo el contenido generado}
 * Para usarla lo más simple es copia-pegar en el archivo js donde se usara.
 */
fs.writeFileSync('IaIris.js', `export default ${ net.toFunction().toString() };`);