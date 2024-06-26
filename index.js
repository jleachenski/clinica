let opcao;
let consultas = [];
let consulta = {};

let indiceAtualizar
let atributoAtualizar

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
      case "3", "4":
        console.log("Qual consulta deseja? Digite o indice")
      case "2":
        consultas.forEach(function(obj, indice) {
          console.log(indice, obj)
        })
        if(opcao == "2")
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
          consulta.removido = false
          consultas.push(consulta)
          console.log(`Consulta agendada com sucesso`)
          consulta = {}
          opcao = undefined
        }
        break;
      case "3":
        let indiceRemocao = entrada
        consultas[indiceRemocao].removido = true
        console.log("Consulta removida com sucesso")
        opcao = undefined
      break;
      case "4":
        if(!indiceAtualizar) {
          indiceAtualizar = entrada
          console.log("Qual atributo você deseja mudar? Digite o nome")
          let atributos = Object.keys(consultas[indiceAtualizar])
          for (let i = 0; i < atributos.length; i++) {
            console.log(atributos[i])
          }
        } else if(!atributoAtualizar) {
          atributoAtualizar = entrada
          console.log("Qual é o novo valor?")
        } else {
          consultas[indiceAtualizar][atributoAtualizar] = entrada
          console.log("Dado atualizado com sucesso")
          indiceAtualizar = undefined
          atributoAtualizar = undefined
          opcao = undefined
        }
        break;
    }
  }
});
