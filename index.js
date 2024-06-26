let opcao;

console.log("O que deseja?");
console.log("1. Inserir consulta");
console.log("2. Listar consultas");
console.log("3. Desmarcar consulta");
console.log("4. Atualizar consulta");

process.stdin.on("data", function (data) {
  let entrada = data.toString().trim();

  if (!opcao) {
    opcao = entrada;
  } else {
    switch (opcao) {
      case "1":
        console.log("Inserindo consulta");
        break;
      case "2":
        console.log("Listando consultas");
        break;
      case "3":
        console.log("Desmarcando consulta");
        break;
      case "4":
        console.log("Atualizando consulta");
        break;
    }
    opcao = undefined
    console.log("Digite outra opção")
  }
});
