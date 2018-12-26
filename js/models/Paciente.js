class Paciente {
	constructor(nome, peso, altura, gordura) {
		this._nome = nome;
		this._peso = peso;
		this._altura = altura;
		this._gordura = gordura;
		this._imc = 0;
	}

	get nome() {
		return this._nome;
	}

	get peso() {
		return this._peso;
	}

	get altura() {
		return this._altura;
	}

	get gordura() {
		return this._gordura;
	}

	get imc() {
		return this._imc;
	}

	set imc(imc) {
		this._imc = imc;
	}
}