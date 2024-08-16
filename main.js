const numeroSenha = document.querySelector('.prment-tt1')
let tamanhoSenha = 12
numeroSenha.textContent = tamanhoSenha
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numero = '0123456789'
const simbolos = '!@#$%¨&*?/|'
const botoes = document.querySelectorAll('.prment-botao')
const campoSenha = document.querySelector('#campo-senha')
const checkbox = document.querySelectorAll('.checkbox')
const forcaSenha = document.querySelector('.forca')

botoes[0].onclick = diminuiTamanho
botoes[1].onclick = aumentaTamanho

function diminuiTamanho(){
    
if (tamanhoSenha > 1){
    tamanhoSenha = tamanhoSenha-1
}
 
    numeroSenha.textContent = tamanhoSenha
    geraSenha()
}
function aumentaTamanho(){
if (tamanhoSenha < 20){
    tamanhoSenha = tamanhoSenha+1
}  
    numeroSenha.textContent = tamanhoSenha
    geraSenha()
}
for (i = 0; i < checkbox.length; i++){
    checkbox[i].onclick = geraSenha
}

geraSenha()

function geraSenha(){
    let alfabeto = ''
    if(checkbox[0].checked){
        alfabeto = alfabeto + letrasMaiusculas
    }
    if(checkbox[1].checked){
        alfabeto = alfabeto + letrasMinusculas
    }
    if(checkbox[2].checked){
        alfabeto = alfabeto + numero
    }
    if(checkbox[3].checked){
        alfabeto = alfabeto + simbolos
    }

    let senha = ''
    for (let i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio]
    
    }
    campoSenha.value = senha
    forceSenha(alfabeto.length)
}

function forceSenha(tamanhoAlfabeto){
    let entropia = tamanhoSenha*Math.log2(tamanhoAlfabeto)
    console.log(entropia)
    forcaSenha.classList.remove('media','fraca','forte')
    if (entropia >= 79){
        forcaSenha.classList.add('forte')
    } else if(entropia <= 31){
            forcaSenha.classList.add('fraca') 
    }else{
        forcaSenha.classList.add('media')
    }
    const valorEntropia = document.querySelector('.entropia')
    valorEntropia.textContent = "Um cumputador pode levar até " + Math.floor(2**entropia/(100e6*60*60*24)) 
    + ' dias para descobrir sua senha'
    
}
