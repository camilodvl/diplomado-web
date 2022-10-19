const emisoras = [
    {
        id:0,
        nombre: 'Selecciona emisora',
        url: '',
        param: 'selected'
    },

    {
        id:1,
        nombre: 'La X',
        url: 'http://stream.eleden.com:8230/lax.aac',
        param: ''
    },

    {
        id:2,
        nombre: 'La Voz de Colombia',
        url: 'https://15723.live.streamtheworld.com/BESAME_MEDELLIN_SC',
        param: ''
    },

    {
        id:3,
        nombre: 'Olimpica (La dorada)',
        url: 'https://server2.ejeserver.com:8244/stream',
        param: ''
    },

    {
        id:4,
        nombre: 'Radioacktiva',
        url: 'https://26503.live.streamtheworld.com/RADIOACKTIVA_MED_SC',
        param: ''
    }
]

const selectEmisoras = document.getElementById('select-emisoras')
let reproductor = document.getElementById('reproductor')
let signal = document.getElementById('signal')
let playing = false;
let currentVolume;


function llenarEmisoras(){
    let info="";
    for(const emisora of emisoras){
        info += `<option ${emisora.param} value =${emisora.id}>${emisora.nombre} </option>`

    }
    selectEmisoras.innerHTML= info
}

function changeEmisora(evt){
    //en el event viene el arreglo creado para emisoras, el event.value tiene el id de la emisora seleccionada
    reproductor.src= emisoras[evt.value].url;
    emisoras[evt.value].id>0 ? signal.style.color="green": signal.style.color="red"
}

function play(){
    reproductor.play();
}

function pause(){
    reproductor.pause();
}

function changeVolume(evt){
    currentVolume = evt.value //devuelve el valor actual del elemento "rango"
    reproductor.volume= currentVolume/100

}

function init(){
    llenarEmisoras();
}

(function(){//funcion con autollamado
    init()
})();