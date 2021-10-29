function consultarstatus() {

    // Ajax es un llamado asincrono, ES UNA FUNCION jQUERY QUE VIENE SIENDO UN OBJETO
    //CON ATIBUTOS Y METODOS QUE NOS VA A PERMITIR ENVIAR INFROMACION O TRAER INFORMACION
    $.ajax({
        url: "http://129.151.106.231:8080/api/Reservation/report-status",
        type: "GET",
        dataType: "JSON",
        //success - propiedad
        //function(json) - funcion anonima
        success: function(respuesta) {
            // capa div - resultado
            $("#resultado").empty();
            //estamos realizando un impresion del reporte el numero de reservacion completa y cancelada
                $("#resultado").append("<tr>");
                $("#resultado").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta.completed + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
                $("#resultado").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta.cancelled + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
                $("#resultado").append("</tr>");

            console.log(respuesta);
        },
        error: function(xhr, status) {
            alert('Ha sucedido un problema, ' + xhr.status);
        },
        complete: function(xhr, status) {
            //status - es el estado de codigo
            alert('Petición realizada, ' + xhr.status);
        }
    });

}
function consultardates(startDate,devolutionDate) {
    //se trae por id el objeto con nombre room y con el metodo nos va retornar el valor que trae
    let myData = {
        startDate: startDate.val(),
        devolutionDate: devolutionDate.val()
    }
    let dataToSend = JSON.stringify(myData)
    $.ajax({
        url: "http://129.151.106.231:8080/api/Reservation/report-dates/"+startDate.val()+"/"+devolutionDate.val(),
        //+ startDate.val()+"/"+devolutionDate.val(),
        type: "GET",
        dataType: "JSON",
        //success - propiedad
        //function(json) - funcion anonima
        success: function(respuesta) {
            // capa div - resultado
            $("#resultado2").empty();
            for (i = 0; i < respuesta.length; i++) {
                $("#resultado2").append("<tr>");
                //estamos realizando un impresion por filas
                $("#resultado2").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta[i].idReservation + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
                $("#resultado2").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta[i].startDate + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
                $("#resultado2").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta[i].devolutionDate + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
                $("#resultado2").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta[i].status + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
                //$("#miResultado").append('<td><input type="button" value="BORRAR" onclick="eliminar(' + json.items[i].id + ')"></td>');
                $("#resultado2").append("</tr>")
            };
            console.log(respuesta);
            console.log(respuesta);
        },
        error: function(xhr, status) {
            alert('Ha sucedido un problema, ' + xhr.status);
        },
        complete: function(xhr, status) {
            //status - es el estado de codigo
            alert('Petición realizada, ' + xhr.status); 
        }
    });

}
function consultarclients(){
    $.ajax({
        url: "http://129.151.106.231:8080/api/Reservation/report-clients",
        type: "GET",
        dataType: "JSON",
        //success - propiedad
        //function(json) - funcion anonima
        success: function(respuesta) {
            // capa div - resultado
            $("#resultado3").empty();
            for (i = 0; i < respuesta.length; i++) {
                $("#resultado3").append("<tr>");
                //estamos realizando un impresion por filas
                $("#resultado3").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta[i].total + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
                $("#resultado3").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta[i].client.name + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
                $("#resultado3").append("</tr>")
            };

            console.log(respuesta);
        },
        error: function(xhr, status) {
            alert('Ha sucedido un problema, ' + xhr.status);
        },
        complete: function(xhr, status) {
            //status - es el estado de codigo
            alert('Petición realizada, ' + xhr.status);
        }
    });

}