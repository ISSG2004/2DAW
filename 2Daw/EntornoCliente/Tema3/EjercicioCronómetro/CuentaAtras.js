
        var x; // Variable global para el intervalo

        function actualizarContador(duracion) {
            var horaFinal = new Date().getTime() + duracion * 1000;

            x = setInterval(function() {
                var horaActual = new Date().getTime();
                var distancia = horaFinal - horaActual;

                var dias = Math.floor(distancia / (1000 * 60 * 60 * 24));//Redondeamos convirtiendo a milisegundos
                var horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));//Redondeamos convirtiendo a milisegundos
                var minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));//Redondeamos convirtiendo a milisegundos
                var segundos = Math.floor((distancia % (1000 * 60)) / 1000);//Redondeamos convirtiendo a milisegundos

                document.getElementById("countdown").innerHTML = dias + "d " + horas + "h "//Mostramos la cantidad introducida
                + minutos + "m " + segundos + "s ";

                if (distancia < 0) {//Poner a 0 cuando llega a 0 y mostrar una alerta por pantalla
                    clearInterval(x);
                    document.getElementById("countdown").innerHTML = "0h 0m 0s";
                    window.alert("Fin boom al lio");
                }
            }, 1000);
        }

        function configurarCuentaRegresiva() {
            //Asociamos los datos introducidos con las variables
            //Convertimos a enteros para poder operar con ellas
            var horas = parseInt(document.getElementById("horas").value) || 0;
            var minutos = parseInt(document.getElementById("minutos").value) || 0;
            var segundos = parseInt(document.getElementById("segundos").value) || 0;
            //Convertimos a segundos
            var duracion = (horas * 3600) + (minutos * 60) + segundos;
            //Mostrar mensaje si la cantidad no es válida
            if (duracion > 0) {
                clearInterval(x);
                actualizarContador(duracion);
            } else {
                alert("Por favor, introduce una duración válida.");
            }
        }