
        //Inicia uma função
        function myFunction() {
            //criar uma variavel texto.
            var Vnome = document.getElementById("Nome").value;
            var Vsnome = document.getElementById("Sobrenome").value;
            var VSexo = document.getElementById("Sexo").value;
            var Altura = document.getElementById("Altura").value;
            Altura = Altura.replace(",",".")
            var Peso = document.getElementById("Peso").value;
            Peso = Peso.replace(",",".")
            var imc = Peso/(Altura*Altura);
            imc = imc.toFixed(1);
                
            //Classificar grau do IMC

                if (imc<18.5){
                    var clas = "Magreza"
                }else if (imc>=18.5 && imc<=24.9){
                    var clas = "Normal"
                }else if (imc>=25 && imc<=29.9){
                    var clas = "Sobrepeso"
                }else if (imc>=30 && imc<=34.9){
                    var clas = "Obesidade grau I"
                }else if (imc>=35 && imc<=39.9){
                    var clas = "Obesidade grau II"
                }else if (imc>=40){
                    var clas = "Obesidade grau III"
                }   

                //Verificar preenchimento das condições

                if (Vnome.trim()===""){
                    var result = "Favor preencher seu nome"
                }else if (Altura===""){
                    var result = "Favor preencher sua altura"
                } else if (Peso===""){
                    var result = "Favor preencher seu peso"
                }else {
                    var result = (Vnome+ " "+Vsnome+" seu imc é "+imc.replace(".",",")+ " e seu grau está classificado como "+clas);
                }

            document.getElementById("mostra").innerHTML = result
            }
        
           
            function functionFahrenheit() {
                //criar uma variavel texto.
                var Vtemp = document.getElementById("Graus F*").value;
               
                var conver = ((Vtemp-32)*(5/9))+273.15;
                conver = conver.toFixed(1);
                    
                  
                    if (Vtemp.trim()===""){
                        var conver = "Preencha a temperatura"
                
                    }else {
                        var conver = conver + " graus Fahrenheit";
                    }
    
                document.getElementById("tempFahrenheit").innerHTML = conver;
                }

                function functionkelvin(){
                    //criar uma variavel texto.
                    var Vtemp = document.getElementById("Graus F*").value;
                    var Vtemp = parseFloat(Vtemp)
                    var acres = parseFloat(273.15)
                    var converter = Vtemp+acres;
                   /* converter = converter.toFixed(1);*/
                        
                      
                        if (Vtemp===""){
                            var converter = "Preencha a temperatura"
                    
                        }else {
                            var converter = converter + " graus Kelvin";
                        }
        
                    document.getElementById("tempKelvin").innerHTML = converter;
                    }


                    function Quilowatt(){
                        //criar uma variavel texto.
                        var KW= document.getElementById("KW").value;
                        var KW = parseFloat(KW)
                        var valorKw = parseFloat(0.05)
                        var converter = KW* valorKw
                        ;
                       /* converter = converter.toFixed(1);*/
                            
                          
                            if (VConsumo===""){
                                var converter = "Preencha a temperatura"
                        
                            }else {
                                var converter = converter + " graus Kelvin";
                            }
            
                        document.getElementById("Consumido").innerHTML = converter;
                        }
                   
                        function functionpERCENTUAL(){
                            //criar uma variavel texto.
                            var KW= document.getElementById("KW").value;
                            var KW = parseFloat(KW)
                            var valorKw = parseFloat(0.05)
                            var converter = KW* valorKw
                            ;
                           /* converter = converter.toFixed(1);*/
                                
                              
                                if (VConsumo===""){
                                    var converter = "Preencha a temperatura"
                            
                                }else {
                                    var converter = converter + " graus Kelvin";
                                }
                
                            document.getElementById("Consumido").innerHTML = converter;
                            }
            
                    