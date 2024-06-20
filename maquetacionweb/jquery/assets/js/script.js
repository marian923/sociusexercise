$(document).ready(function() {
    // metodo para consultar una película aleatoria
    $("#consultarPelícula").click(function() {
        $.ajax({
            url: 'https://www.codigo-alfa.cl/aglo/Tester/peliculaAleatoria',
            method: 'GET',
            dataType: 'json',
            success: function(data) {
                $("#películaAleatoria").text(data.pelicula);
            },
            error: function(error) {
                console.error("Error al obtener la película aleatoria:", error);
            }
        });
    });

    // metodo para consultar lista de peliculas
    $.ajax({
        url: 'https://www.codigo-alfa.cl/aglo/Tester/listasPeliculas',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log(data);  
            var peliculas = data.peliculas; 
            
            if (Array.isArray(peliculas)) {
                var $listaPelículas = $("#listaPelículas");
                 
                var options = peliculas.map(function(película) {
                    return $("<option>", {
                        value: película.id,
                        text: película.title
                    });
                });
    
                
                $listaPelículas.append(options);
            } else {
                console.error("La propiedad 'peliculas' no es un array:", peliculas);
            }
        },
        error: function(error) {
            console.error("Error al obtener la lista de películas:", error);
        }
    });
    
    
});
