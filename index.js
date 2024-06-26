let opcao;
let consultas = [];
let consulta = {};

console.log("O que deseja?");
console.log("1. Inserir consulta");
console.log("2. Listar consultas");
console.log("3. Desmarcar consulta");
console.log("4. Atualizar consulta");

process.stdin.on("data", function (data) {
  let entrada = data.toString().trim();

  if (!opcao) {
    opcao = entrada;

    switch (opcao) {
      case "1":
        console.log("Qual o nome do paciênte? ")
        break;
      case "2":
        consultas.forEach(function(obj, indice) {
          console.log(indice, obj)
        })
        opcao = undefined
        break;
      default:
        console.log("Opção inválida");
        opcao = undefined
        break;
    }
  } else {
    switch (opcao) {
      case "1":
        if(!consulta.paciente) {
          consulta.paciente = entrada;
          console.log("Médico: ");
        } else if(!consulta.medico) {
          consulta.medico = entrada
          console.log("Data: ");
        } else if(!consulta.data) {
          consulta.data = entrada
          console.log("Horário: ");
        } else {
          consulta.horario = entrada
          consultas.push(consulta)
          console.log(`Consulta agendada com sucesso`)
          consulta = {}
          opcao = undefined
        }
        break;
      case "3":
        console.log("Desmarcando consulta");
        break;
      case "4":
        console.log("Atualizando consulta");
        break;
    }
  }
});
