document.querySelector('#cadastro-paciente').addEventListener("submit", function(event) {
	event.preventDefault();
	let $ = document.querySelector.bind(document);
	let paciente = new Paciente($('#nome').value, $('#peso').value, $('#altura').value, $('#gordura').value );
});


