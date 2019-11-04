const inquirer = require('inquirer');

console.log('Bienvenido a DH Pizza!!!');

let preguntasDelivery = [

    {
       type: 'confirm',
       name:'paraDelivery',
       message:'Te hacemos el envio a Domicilio?',
       default: false,
    },
    {  type: 'input',
       name: 'domicilioCliente',
       message: 'Escribí tu direccion:',
         when: function (respuestas) {
          return respuestas.paraDelivery;
          },
    },
    {
        type: 'input',
        name: 'nombreCliente',
        message: 'Escribí tu nombre:'
    },
    { 
       type: 'input',
       name: 'TelefonoCliente',
       message: 'Ingresá el Numero Telefonico:'

    },
	{
        type: 'rawlist',
        name: 'gustoPizza',
        message:'Elegí el gusto de tu pizza',
        choices: ['Muzzarella','Calabresa', 'Napolitana','Fugazzetta'],
	    default: 'Muzzarella'
    },
	{
        type: 'checkbox',
        name: 'tamanioPizza',
        message: 'Elegi el tamaño',
        choices: ['chica','mediana','grande'],
		default: 'grande'
    },
	{   
       type: 'confirm', 
       name: 'agregaEmpanadas',
       message: 'Desea agregar empanadas a su pedido?',
	   default: false	   
    },
	{   
       type: 'checkbox',
       name: 'gustoEmpanadas',
       message: 'Que gustos de empanadas?',
       choices: ['jamon y queso','carne','pollo'],
         when: function (respuestas) {
          return respuestas.agregaEmpanadas;
         },
    },
	{   
       type: 'confirm',
       name: 'agregaBebida',
       message: 'Desea agregar bebida a su pedido?',
	   default: true
    },
    {   
       type: 'checkbox',
       default: 'Coca',
       name: 'gustoGaseosa',
       message:'Escribí el sabor de tu Gaseosa',
       choices: ['Coca','Manaos', 'Pepsi','Agua'],
         when: function (respuestas) {
          return respuestas.agregaBebida;
          },
    },
	{
       type: 'confirm',
       name:'tipocliente',
       message:'Sos Cliente Habitual?',
       default: false
     }
 	];
inquirer
  .prompt (preguntasDelivery)
  .then(function(respuestas){
      console.log(respuestas);
  });