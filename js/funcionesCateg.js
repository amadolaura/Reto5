function consultar() {


    $.ajax({
        url: "http://129.151.106.231:8080/api/Category/all",
        type: "GET",
        dataType: "JSON",

        //success - propiedad
        //function(json) - funcion anonima
        success:function(respuesta){
            // capa div - resultado
            $("#resultado").empty();
            for(i=0;i<respuesta.length;i++){

                $("#resultado").append("<tr>");
                $("#resultado").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta[i].id + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
                $("#resultado").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta[i].name + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
                $("#resultado").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta[i].description + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
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


function registrar(){          
    let var2 = {
        name:$("#name").val(),
        description:$("#description").val()
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://129.151.106.231:8080/api/Category/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
        },
        complete: function(xhr, status) {
            alert('Petición realizada' + xhr.status);
            limpiarFormulario();
        }
        });

}

function editar() {
    let myData = {
        id: $("#id").val(),
        name: $("#name").val(),
        description: $("#description").val(),
    }
    let dataTosend = JSON.stringify(myData);
    $.ajax({

        url: "http://129.151.106.231:8080/api/Category/update",
        type: "PUT",
        data: dataTosend,
        contentType: "application/JSON",
        dataType: 'JSON',
        success: function(respuesta) {
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#description").val("");
            consultar();
        },
        error: function(xhr, status) {
            alert('Ha sucedido un problema' + xhr.status);
        },
        complete: function(xhr, status) {
            alert('Petición realizada' + xhr.status);
            limpiarFormulario();
        }
    });
}


function eliminar(id) {
    let myData = {
        id: id.val()
    }
    let dataToSend = JSON.stringify(myData)
    $.ajax({
        url: "http://129.151.106.231:8080/api/Category/" + id.val(),
        type: 'DELETE',
        //data: dataToSend,
        //contentType: "application/JSON",
        datatype: "JSON",
        success: function(repuesta) {
            $("#resultado").empty();
            consultar();
            console.log(json);
            console.log("id", dataToSend)
            debugger
        },
        error: function(xhr, status) {
            alert('ha sucedido un problema' + xhr.status);
        },
        complete: function(xhr, status) {
            alert('Petición realizada ' + xhr.status);
            limpiarFormulario();
        }
    });

}


/*
function buscarPorID(id) {
    $.ajax({
        url: "http://localhost:8080/api/Category/" + id.val(),
        dataType: "JSON",
        type: "GET",
        success: function(respuesta) {
            $("#resultado").empty();
            $("#resultado").append("<tr>");
            $("#resultado").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta[0].id + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
            $("#resultado").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta[0].name + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
            $("#resultado").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta[0].description+ "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
            $("#resultado").append("</tr>");

            //$("#resultado").append( json.items[0].room+"&nbsp;&nbsp;&nbsp;&nbsp;"
            //+json.items[0].stars+"&nbsp;&nbsp;&nbsp;&nbsp;"
            //+json.items[0].category_id+"&nbsp;&nbsp;&nbsp;"
            //+json.items[0].description);
            console.log(json);
            console.log("id", id.val())
            debugger
        },
        error: function(xhr, status) {
            alert('ha sucedido un problema' + xhr.status);
        },
        complete: function(xhr, status) {
            alert('Petición realizada ' + xhr.status);
        }
    });
}**/


function limpiarFormulario() {
    $("#id").val("");
    $("#name").val("");
    $("#description").val("");
}

function soloLectura() {
    $("#id").prop("readonly", false);
}