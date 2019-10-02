var empresas = [
    { id:"1", ruc:"20145678912", rs:"Movistar" }, 
    { id:"2", ruc:"20125893645", rs:"Entel" }, 
    { id:"3", ruc:"20165498635", rs:"Claro" }, 
];
var requerimientos = [
    { id:"1", cliente:"1", tipo:"FT", fecha:"2019-06-01", estado:"1", formateador:"1" },
    { id:"2", cliente:"1", tipo:"BV", fecha:"2019-07-11", estado:"1", formateador:"2" },
    { id:"3", cliente:"2", tipo:"NC", fecha:"2019-08-21", estado:"2", formateador:"3" },
    { id:"4", cliente:"3", tipo:"BV", fecha:"2019-05-15", estado:"1", formateador:"4" },
    { id:"5", cliente:"2", tipo:"FT", fecha:"2019-06-30", estado:"2", formateador:"1" },
    { id:"6", cliente:"2", tipo:"NC", fecha:"2019-09-25", estado:"1", formateador:"2" },
    { id:"7", cliente:"3", tipo:"BV", fecha:"2019-04-08", estado:"1", formateador:"4" }
];

var formateadores = [
    { id: "1", nombre: "Mayra Lopez" },
    { id: "2", nombre: "Alberto Zegarra" },
    { id: "3", nombre: "Juan Beltran" },
    { id: "4", nombre: "Susana Garcia" }
]

var tipos = [
    { id: "FT", nombre:"Factura" },
    { id: "BV", nombre:"Boleta" },
    { id: "NC", nombre:"Nota Crédito" }   
]

var estados = [
    { id:"1", nombre: "PENDIENTE" },
    { id:"2", nombre: "FINALIZADO" }
]