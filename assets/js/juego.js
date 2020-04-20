//
// *2C     CLOVER
// *2D     DIAMOND
// *2H     HEARTS
// *2S     SWORDS
//


let deck          = [] ;
const tipos       = ['C','D','H','S'];
const especiales  = ['A','J','Q','K'];

let puntosJugador = 0 ,
    puntosComputadora = 0;

//referencias del html

const btnPedir = document.querySelector('#btnPedir');
const divCartasJugador = document.querySelector('#jugador-cartas');

const marcadorJugador = document.querySelector('small');


//console.log(btnPedir);

// esta funcion crea una nueva baraja
const crearDeck = () => {


    for ( let i = 2; i <= 10 ; i++){

           for ( let tipo of tipos){

                deck.push( i + tipo);
           }
    }

    for( let tipo of tipos){

            for( let esp of especiales){

                 deck.push( esp + tipo);

            }

    };

   // console.log( deck );
     deck = _.shuffle(deck);
//     console.log( deck );
    return deck ;
};

crearDeck();


// esta funcion me permite tomar una carta

const pedirCarta = () => {

 if ( deck.length === 0 ){

 throw 'no hay cartas';

 };

const carta = deck.pop() ;
// console.log( deck );

// console.log('este es la baraja');
// console.log( carta );
return carta ;



};


// //for( i = 0 ; i <= 100 ; i++ ){
// pedirCarta();
// };
//pedirCarta();

const valorCarta = ( carta ) => {
// const valor = carta.substring( 0 , carta.length - 1 );
// //console.log( { valor } );
// let puntos = 0 ;

// if ( isNaN ( valor )){
// console.log('NO Es numero');
//
//     puntos = ( valor ===  'A') ? 11 : 10 ;
//
// }
// else{
// console.log('Es numero');
// puntos = valor * 1 ;
// }
//
// console.log(puntos);

 const valor = carta.substring( 0 , carta.length - 1 );
return ( isNaN ( valor )) ?
    ( valor ===  'A'  ? 11 : 10 )
    :  valor * 1 ;
};

// const valor = valorCarta( pedirCarta () );
// console.log( { valor });

//eventos


btnPedir.addEventListener('click', () => {

// console.log('click');

const carta = pedirCarta();
console.log(carta);

puntosJugador = puntosJugador + valorCarta ( carta );
console.log (puntosJugador);

marcadorJugador.innerHTML= puntosJugador ;


});




