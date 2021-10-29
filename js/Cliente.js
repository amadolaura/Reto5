function consultar() {

    $.ajax({
        url: 'http://129.151.106.231:8080/api/Client/all',
        type: 'GET',
        dataType: 'JSON',

        //success - propiedad
        //function(json) - funcion anonima
        success: function(respuesta) {
            // capa div - resultado
            $("#resultado").empty();
            for (i = 0; i < respuesta.length; i++) {
                $("#resultado").append("<tr>");
                $("#resultado").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta[i].idClient + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
                $("#resultado").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta[i].email + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
                $("#resultado").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta[i].password + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
                $("#resultado").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta[i].name + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
                $("#resultado").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta[i].age + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
                //$("#miResultado").append('<td><input type="button" value="BORRAR" onclick="eliminar(' + json.items[i].id + ')"></td>');
                $("#resultado").append("</tr>")
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


function registrar() {

    let var2 = {
        email:$("#email").val(),
        password:$("#password").val(),
        name:$("#name").val(),
        age:$("#age").val() 

        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://129.151.106.231:8080/api/Client/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });
        
}

function editar() {
    let myData = {
        idClient: $("#idClient").val(),
        email:$("#email").val(),
        password:$("#password").val(),
        name:$("#name").val(),
        age:$("#age").val() 
    }
    let dataTosend = JSON.stringify(myData);
    $.ajax({

        url: "http://129.151.106.231:8080/api/Client/update",
        type: "PUT",
        data: dataTosend,
        contentType: "application/JSON",
        dataType: 'JSON',
        success: function(respuesta) {
            $("#resultado").empty();
            $("#idClient").val("");
            $("#email").val("");
            $("#password").val("");
            $("#name").val("");
            $("#age").val("");
            consultar();
        },
        error: function(xhr, status) {
            alert('Ha sucedido un problema' + xhr.status);
        },
        complete: function(xhr, status) {
            alert('Petición realizada' + xhr.status);
            //limpiarFormulario();
        }
    });
}


function eliminar(id) {
    let myData = {
        id: id.val()
    }
    let dataToSend = JSON.stringify(myData)
    $.ajax({
        url: "http://129.151.106.231:8080/api/Client/" + id.val(),
        type: 'DELETE',
        //data: dataToSend,
        //contentType: "application/JSON",
        datatype: "JSON",
        success: function(repuesta) {
            $("#resultado").empty();
            consultar();
            console.log(json);
            console.log("idClient", dataToSend)
            debugger
        },
        error: function(xhr, status) {
            alert('ha sucedido un problema' + xhr.status);
        },
        complete: function(xhr, status) {
            alert('Petición realizada ' + xhr.status);
            //limpiarFormulario();
        }
    });

}

/**
function buscarPorID(id) {
    $.ajax({
        url: "http://localhost:8080/api/Client/" + id.val(),
        dataType: 'json',
        type: 'GET',
        success: function(respuesta) {
            $("#resultado").empty();
            $("#resultado").append("<tr>");
            $("#resultado").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta[i].idClient + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
            $("#resultado").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta[i].name + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
            $("#resultado").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta[i].email + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
            $("#resultado").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta[i].age + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
            $("#resultado").append("</tr>");

            //$("#resultado").append( json.items[0].room+"&nbsp;&nbsp;&nbsp;&nbsp;"
            //+json.items[0].stars+"&nbsp;&nbsp;&nbsp;&nbsp;"
            //+json.items[0].category_id+"&nbsp;&nbsp;&nbsp;"
            //+json.items[0].description);
            console.log(respuesta);
            console.log("idClient", id.val())
            debugger
        },
        error: function(xhr, status) {
            alert('ha sucedido un problema' + xhr.status);
        },
        complete: function(xhr, status) {
            alert('Petición realizada ' + xhr.status);
        }
    });
}*/

/** 
function limpiarFormulario() {
    $("#room").val("");
    $("#stars").val("");
    $("#category_id").val("");
    $("#description").val("");
}

function soloLectura() {
    $("#id").prop("readonly", false);
}*/