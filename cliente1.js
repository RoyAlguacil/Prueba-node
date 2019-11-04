const inquirer = require('inquirer');




let preguntasDelivery =[

    {

        type: 'confirm',

        name:'paraDelivery',

        message:'Queres para llevar?'

    },

{

    type: 'input',

    name: 'nombreVisitante',

    message: 'Ingresa tu nombre'




},

{   

    type: 'input',

    name: 'dirVisitante',

    message: 'Ingresa direccion'




},

{

    type: 'rawlist',

    name: 'gustoPizza',

    message: 'Elegi gusto',

    choices: ['muz','morron','jq','napo']




},

{

    type: 'list',

    name: 'tamanioPizza',

    message: 'Elegi tamanio',

    choices: ['chica','mediana','grande']




},

{   

    type: 'input',

    name: 'agregaBebida',

    message: 'Desea agregar bebida?'

},

{   

    type: 'input',

    name: 'gustoBebida',

    message: 'Que gusto de bebida?'

},

{   

    type: 'input',

    name: 'clienteHabitual',

    message: 'Sos cliente habitual?'

},

{   

    type: 'checkbox',

    name: 'gustoEmpanadas',

    message: 'Que gustos de empanadas?',

    choices: ['jamon y queso','carne','pollo']

}

];

inquirer

.prompt (preguntasDelivery)

.then (function(respuestas)

{

    console.log(respuestas);

}

);