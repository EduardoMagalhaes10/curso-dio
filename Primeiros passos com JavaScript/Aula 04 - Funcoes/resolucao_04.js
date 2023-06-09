/* O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave; */

function calculoImc(peso, altura) {
    const alturaQuadrada = altura * altura;
    return peso / alturaQuadrada;
}

function classificarImc(imc){
    if (imc < 18.5){
       return 'Abaixo do Peso';
    }
    else if (imc >= 18.5 && imc <= 25){
        return 'Peso Normal';
    }
    else if (imc >= 25 && imc <= 30){
        return 'Acima do Peso';
    }
    else if (imc >= 30 && imc <= 40){
        return 'Obeso';
    }else{
        console.log('Obesidade Grave');
    }
}

function main() {
    const peso = 59;
    const altura = 1.67;
    const imc = calculoImc(peso,altura);
    console.log(classificarImc(imc));

   
}
main();