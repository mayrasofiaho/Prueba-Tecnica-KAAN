function searchKMP(textString, subString) {
    var k = 0;
    var i = 0;
    var F = [];
    if (textString.length>=subString.length){
        F = TablaKMP (textString, F);
        while (textString.length>k+i){
            if(subString[i]==textString[k+i]){
                if (i==(subString.length-1))
                    return k;
                i++;
            }
            else{
                k = k+i - F[i];
                if (i>0)
                    i = F[i];
            }
        }
    }
    return -1;
}

function TablaKMP(textString, F){
    var pos = 2;
    var cnd = 0;
    F[0] = -1;
    F[1] = 0;
    while (pos<=textString.length){
        if (textString[pos-1] = textString[cnd]){
            cnd = cnd + 1;
            F[pos] = cnd;
            pos = pos + 1;
        }
        else
            if(cnd>0)
                cnd = F[cnd];
            else{
                F[pos]=0;
                pos=pos+1;
            }
    }
    return F;
}

function entradaTeclado (texto){
    var  i = rl.createInterface(process.stdin, process.stdout, null); 
    i.question(texto, 
    function(answer) { 
    return answer; 
    i.close(); process.stdin.destroy(); 
}); 
}

//var textString = 'TANGENTE';
//var subString = 'GEJ';
var textString =entradaTeclado ("Ingrese la cadena donde se buscará el patrón: ")
var subString =entradaTeclado ("Ingrese el patrón a buscar: ")
//console.log ("Posicion donde se encontró la subcadena:", searchKMP(textString, subString));


var  i = rl.createInterface(process.stdin, process.stdout, null); 
i.question('Ingresa la cadena donde se buscará el patrón: ', function(answer) { 
    console.log('Nice to meet you> ' + answer); 
    i.close(); process.stdin.destroy(); 
}); 
