const media = 8.0
let nota = 9.1
if (nota == media) 
{
    console.log(`Sua nota é ${nota}. Você passou!`)
} 
else if (nota > media && nota <= 9)
{
    console.log(`Sua nota é ${nota}. Parabéns você é um bom aluno!`)
} 
else if (nota > 9) 
{
    console.log(`Sua nota é ${nota}. Parabéns você é um aluno exemplar!`)
} else {
    console.log(`Sua nota é ${nota}. Você reprovou.`)
}