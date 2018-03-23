var m       = require('./M/matrix.js');
var tM      = require('./M/transMatrix.js');
var sM      = require('./M/sumMatrix.js');
var sigmoid = require('./M/sigmoid.js');


function Neural_network(hidden, neurons) {
	this.activation_function = function (x) {
		return 1/(1 + Math.pow(2.71828, -x))
	}


	this.hidden  = hidden;
	this.neurons = neurons;

	this.weights = [];
	this.y0      = [[]];
	this.y1      = [];
	this.e0      = [];
	this.eHid    = [];
	this.eW      = [];
	this.h       = true;

	for (var i = 0; i < this.hidden + 2; i++) {
		this.weights.push([]);
	}

	this.train = function (arr) {
		var wlast = this.weights.length - 1;

		//Заполнение весов для входных слоев нейронов
		for (var i = 0; i <= arr[0].input.length - 1; i++) {

			this.weights[0].push([]);
			
			for (var p = 0; p < this.neurons; p++) {
				this.weights[0][i].push(Math.random(0, 1));
			}
		}

		

		
		//Заполнение весов для скрытых слоев нейронов
		for (var b = 1; b < this.hidden + 1; b++) {
			
			for (var p = 0; p < this.neurons; p++) {
				
				this.weights[b].push([]);

				for(var n =0; n<this.neurons; n++) {
					this.weights[b][p].push(Math.random(0, 1));
				}
				
			}
		}

		//Заполнение весов для выходных слоев нейронов
		for (var p = 0; p < this.neurons; p++) {	
			this.weights[wlast].push([]);
			for (var i = 0; i < arr[0].output.length; i++) {
				this.weights[wlast][p].push(Math.random(0, 1));
			}
		}

		while(this.h) {

		
			for (var po = 0; po < arr.length; po++) {
				this.e0 = [];
				this.eHid = [];
				//Входные сигналы на нейронную сеть
				var jd = [];
				for (var i = 0; i < arr[po].input.length; i++) {
					jd.push(arr[po].input[i]);
				}
				this.y0[0] = jd;

				this.y1 = this.y0;
				this.y1 = this.shamanism(this.y1);

				
				//Погрешность для выходных слоев
				for (var i = 0; i < this.y1[0].length; i++) { //this.y1[0].length равен 2 но сделал 4 раза..
					this.e0.push([]);
					console.log(arr[i].output[0] - this.y1[0][i]);
					if (arr[i].output[0] - this.y1[0][i] < 0.0001) {
						this.h = false
					}
					this.e0[i].push(arr[i].output[0] - this.y1[0][i]);
				}
				//Изменение весов выходных слоев
				// for ( var i = 0; i < this.e0[0].length; i++ ) {
				// 	for (var j = 0; j < this.weights[wlast].length; j++) {
				// 		this.weights[wlast][j][0] *= this.e0[0][i];
				// 	}
				// }		
				
				var kM = this.e0;


				//Высчитывание погрешности для каждого скрытого слоя,
				for (var i = this.hidden + 1; i >= 0; i--) {
					this.eHid.unshift(kM);
					kM = m(this.weights[i], kM );
				}


				var ket = [];
				for (var i = 0; i < this.weights.length; i++) {
					ket.push(m(this.weights[i], tM(this.eHid[i])));
				}

				var tfC = [];

				for (var i = 0; i < ket.length; i++) {
					tfC.push([])
					for (var t = 0; t < ket[i].length; t++) {
						tfC[i].push([])
					 	this.weights[i][t].forEach((tem, p) => {
					 		tfC[i][t].push(ket[i][t][p] * this.weights[i][t][p])
					 	});
					 }
				}

				var GhP = []
				for (var i = 0; i < this.weights.length; i++) {
					GhP.push(sM(this.weights[i], tfC[i]));
				}

				this.weights = GhP;
			}

		// for ( var i = 0; i < arr[0].input.length; i++ ){ 
		// 	for ( var j = 0; j < this.hidden.length; j++ ) 
		// 		if (i > 0 && i < this.wlast) {}
		// 		this.weights[i][j] += 0.1 * ошибки[i] * вход[j];
		// } 
		
		// for ( var i = 0; i < веса выходов.length; i++ ) 
		// 	веса_выходного_слоя[i] += 0.1 * ошибка *скрыте_слои[i];
	}	
}

	this.shamanism = function (obj, num) {
		for (var i = 0; i < this.weights.length; i++) {
			obj = m(obj ,this.weights[i]);
			obj.forEach((item, i) => {
			  obj[i].forEach((item, m) => {
				  obj[i][m] = sigmoid(item);
				});
			});
		}

		return obj;
	}
}

var network = new Neural_network(2, 10000);

trainArr = [
	{input: [0,0], output: [0]}//,
	// {input: [1,1], output: [0]},
	// {input: [1,1], output: [0]},
	// {input: [1,1], output: [0]}
]

network.train(trainArr);

console.log("//Правельный ответ: 0");
console.log(network.shamanism([[0, 0]]));