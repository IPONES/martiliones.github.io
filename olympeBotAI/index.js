var brain = require('brain.js');
const fs  = require('fs');
var net   = new brain.NeuralNetwork();

var trainDATA = require('./data.js');
net.train(trainDATA);

let wstream = fs.createWriteStream('./data/olympeTrain.json');
wstream.write(JSON.stringify(net.toJSON(),null,2));
wstream.end();

var output = net.run({ q: 0.5943958, w: 0.5939516, e: 0.5941399, r: 0.5941539, t: 0.5944687, y: 0.5943706, u: 0.5946703999999999, i: 0.5943606, o: 0.5943596999999999, p: 0.5940502, a: 0.5945476});
console.log(output); //TRUE: 0.5944307999999999 | AI: 0.5941076874732971