// Acá voy a alojar codigo de JQuery
$(document).ready(function(){

    //Funcion con JQuery
    $("#convertir").click(function(){
        let cantidad = $("#cantidad").val();
        let moneda = $("#moneda").val();

        $.ajax({
            url: "https://api.exchangerate-api.com/v4/latest/"+ moneda,
            //data es un objeto, porque esta entre llaves
            data: {
            },
            type: "GET",
            success: function(result){
                // La función JSON.parse convierte de JSON a JavaScript
                //let resultado = JSON.parse(result);
                //console.log(resultado.rates);
                $(".fecha").html("Fecha válida: " + result.date);
                let = usd_rate = result.rates.USD;
                let = eur_rate = result.rates.EUR;
                let = cop_rate = result.rates.COP;

                $("#tasa_dolar").html(usd_rate);
                $("#tasa_euro").html(eur_rate);
                $("#tasa_peso").html(cop_rate);

                let = usd_total = cantidad * usd_rate;
                let = eur_total = cantidad * eur_rate;
                let = cop_total = cantidad * cop_rate;

                $("#valor_dolar").html(usd_total);
                $("#valor_euro").html(eur_total);
                $("#valor_peso").html(cop_total);

                $("#resultado").removeClass("d-none");

                //console.log(result.rates.COP);
            }
        });
    });
});