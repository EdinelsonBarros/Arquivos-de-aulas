const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/1 * 16 * * 4', function () {
    console.log('Executando tarefa1!', new Date().getSeconds())
}) // executar a cada 5 segundos, minutos, horas, dia do mês, mês, dia da semana(sendo 0 domingo e sábado 7)

setTimeout(function (){
    tarefa1.cancel()
    console.log('Cancelando tarefa1!')
}, 10000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 17
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa2!', new Date().getSeconds())
})