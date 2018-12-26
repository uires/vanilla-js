function onLoadCalcularImc() {
	let $ = document.querySelector.bind(document);

	let pacientes = document.querySelectorAll('.paciente');
	pacientes.forEach( function(iten) {
		console.log(iten.querySelector('.info-nome').textContent);
		iten.querySelector('.info-imc').textContent = calcularImc(iten.querySelector('.info-peso').textContent, 
			iten.querySelector('.info-altura').textContent);
	});

}

function calcularImc(peso, altura) {
	let arrayValidacaoPesoAltura = validarAltura(peso, altura);
	if(arrayValidacaoPesoAltura[0] == true && arrayValidacaoPesoAltura[1] == true) {
		return (peso / (altura * altura)).toFixed(1);
	} else {
		if(arrayValidacaoPesoAltura[0] == false && arrayValidacaoPesoAltura[1] == false) {
			return 'Peso e altura inválidos!';
		}
		if(arrayValidacaoPesoAltura[0] == false) {
			return 'Peso inválido!';
		}
		if(arrayValidacaoPesoAltura[1] == false) {
			return 'Altura inválida!';
		}
	}	
}

function validarAltura(peso, altura) {
	let arrayValidacao = [];
	
	if(peso <= 35 || peso >= 230) {
		arrayValidacao.push(false);
	} else { 
		arrayValidacao.push(true);
	}
	if(altura < 0.39 || altura > 2.30) {
		arrayValidacao.push(false);
	} else {
		arrayValidacao.push(true);
	}
	return arrayValidacao;
}
