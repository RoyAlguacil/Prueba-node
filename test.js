const fs = require('fs');

const rutaDelArchivo = __dirname + '/pedidos.json';

// Leo el archivo para saber si tiene algo
let infoArchivo = fs.readFileSync(rutaDelArchivo, 'utf8');

let contenidoPedidos = infoArchivo.length == 0 ? [] : JSON.parse(infoArchivo);

let pedidoFinal = {
	id: contenidoPedidos.length + 1
}

contenidoPedidos.push(pedidoFinal);

fs.writeFileSync(rutaDelArchivo, JSON.stringify(contenidoPedidos, null, ' '));