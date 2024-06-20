$(document).ready(function() {
    // Función para consultar una película aleatoria
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

    $.ajax({
        url: 'https://www.codigo-alfa.cl/aglo/Tester/listasPeliculas',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log(data); // Verifica la respuesta del servidor
    
            // Asumiendo que la respuesta tiene una propiedad 'peliculas' que es un array
            var peliculas = data.peliculas; 
            
            if (Array.isArray(peliculas)) {
                var $listaPelículas = $("#listaPelículas");
                
                // Utilizando map para crear los elementos option
                var options = peliculas.map(function(película) {
                    return $("<option>", {
                        value: película.id,
                        text: película.title
                    });
                });
    
                // Agregar los elementos option al select
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
