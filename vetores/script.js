var itens = ["lápis", "borracha", "caderno", "caneta", "corretivo", "lapiseira"], resposta;
            
            function lista_elementos(){
                var tamanho = itens.length;
                resposta = "<ul>";
                for(var i=0; i<tamanho; i++){
                    resposta+= "<li>"+itens[i]+"</li>";
                }
                resposta+="</ul>";

                document.getElementById("box_resultados").innerHTML = resposta;
            }
            
            function lista_elementos_ordenados(){
                var tamanho = itens.length;
                resposta = "<ul>";
                
                itens.sort();
                
                for(var i=0; i<tamanho; i++){
                    resposta+= "<li>"+itens[i]+"</li>";
                }
                resposta+="</ul>";
                
                document.getElementById("box_resultados").innerHTML = resposta;
            }
            
            
            function primeiro_ultimo(){
                var tamanho = itens.length;
                resposta = "<ul>";
                resposta+= "<li>"+itens[0]+"</li>";
                resposta+= "<li>"+itens[tamanho-1]+"</li>";
                resposta+="</ul>";
                
                document.getElementById("box_resultados").innerHTML = resposta;
            }
            
            function verifica(elemento){
                var tamanho = itens.length;
                var cont = 0;
                
                for(var i=0; i<tamanho; i++){
                    if(elemento == itens[i]){
                        cont = cont + 1;
                    }
                }
                
                if(cont != 0){
                    resposta = "<p>O elemento "+elemento+" foi encontrado no vetor de itens "+cont+ " vez(es)</p>"  ; 
                }else{
                    resposta = "<p>O elemento "+elemento+" não foi encontrado no vetor de itens!</p>"; 
                }
                        
                document.getElementById("box_resultados").innerHTML = resposta;
            }
