
function limparCampos(campos) {
	campos.forEach(function(iten) {
		if(iten.tagName == 'input') {
			iten.value = '';
		}
	});
	campos[0].focus();
}