// Patron modulo IIFE
const AsignarVideo = (function() {
    // Función privada para mostrar el video
    function _mostrarVideo(url, id) {
        const iframe = document.getElementById(id);
        if (iframe) { // comprueba si existe el elemento
            iframe.setAttribute('src', url); 
        }
    }

    // Función pública que recibe los parámetros (url, id)
    function mostrarVideo(url, id) {
        _mostrarVideo(url, id); // Llamado a la función privada
    };

    // Retorno de la función pública
    return {
        mostrarVideo: mostrarVideo
    }

})();


// clase padre Multimedia
class Multimedia {
    constructor(url) {
        // Atributo privado protegido por closure
        this._url = url;
    }

    // Método getter para obtener la URL
    get url() {
        return this._url;
    }

    // Método setter para establecer la URL
    set url(newUrl) {
        this._url = newUrl;
    }

    // Método setInicio
    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    }
}
// Clase hija Reproductor que hereda de Multimedia
class Reproductor extends Multimedia {
    constructor(id, url) {
        super(url);
        this.id = id;
    }

    // Método para llamar a la funcion que definimos en el módulo VideoPlayer
    playMultimedia() {
        AsignarVideo.mostrarVideo(this.url, this.id);
    }

    setInicio(tiempo) {
        // Modificar la URL para agregar el tiempo de inicio
        this.url = `${this.url}&amp;start=${tiempo}`;
        // Llamar a playMultimedia para actualizar el iframe
        this.playMultimedia();
    }
}

// URL para cada tipo de contenido
const urlPelicula = 'https://www.youtube.com/embed/bzLn8sYeM9o?si=Cn2larj9unfoxeKC'; 
const urlSerie = 'https://www.youtube.com/embed/NcgfoRpWLTs?si=uWbaCiqw06pDWhpI'; 
const urlMusica = 'https://www.youtube.com/embed/ALk3o7m5Jt8?si=lp7AcmouOnRsRfIl';



// Creando instancias de la clase Reproductor para cada tipo de contenido
const reproductorMusica = new Reproductor('musica', urlMusica);
const reproductorPelicula = new Reproductor('peliculas', urlPelicula);
const reproductorSerie = new Reproductor('series', urlSerie);


// ejemplo de cambiar la url desde el setter de la nueva instancia
reproductorMusica.url = "https://www.youtube.com/embed/cX40tn9fcgE?si=kGbBL4zJg1sz7pga";


// Llamando al método playMultimedia de cada instancia
reproductorMusica.playMultimedia();
reproductorPelicula.playMultimedia();
reproductorSerie.playMultimedia();

// Llamando al método setInicio de cada instancia
reproductorMusica.setInicio(30);
reproductorPelicula.setInicio(60);
reproductorSerie.setInicio(10);

