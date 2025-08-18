const cadastrarUsuario = require('./cadastro');
const listarUsuarios = require('./listagem');
const atualizarUsuario = require('./atualizar');
const removerUsuario = require('./remocao');

let usuarios =[]

function menu(rl) {
    console.log(`
    <<<<<<< MENU >>>>>>>>
    1. Cadastrar usuário;
    2. Listar todos os usuários;
    3. Atualizar usuário;
    4. Remover usuário;
    5. Sair;`)
    rl.question('\nEscolha uma opção: ', (opcao) => {
        switch (opcao){
            case'1':
            cadastrarUsuario(rl, menu, usuarios)
            break
            case'2':
            listarUsuarios(rl, menu, usuarios)
            break
            case'3':
            atualizarUsuario(rl, menu, usuarios)
            break
            case'4':
            removerUsuario(rl, menu, usuarios)
            break
            case'5':
            rl.close()
            break
            default:
                console.log('Opção inválida, tente novamente.')
                menu(rl)
                break
        }
    })
}

module.exports = menu