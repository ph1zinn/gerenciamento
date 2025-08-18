function removerUsuario(rl, menu, usuarios) {
    if (usuarios.length === 0) {
        console.log("Não há usuários cadastrados para remover.");
        return menu(rl);
    }

    console.log("--- Usuários Cadastrados ---");
    usuarios.forEach(usuario => {
        console.log(`ID: ${usuario.id} | Nome: ${usuario.nome} | E-mail: ${usuario.email}`);
    });
    console.log("----------------------------");

    rl.question('Digite o ID do usuário que deseja remover: ', (id) => {
        const idParaRemover = parseInt(id);
        const indiceUsuario = usuarios.findIndex(u => u.id === idParaRemover);

        if (indiceUsuario === -1) {
            console.log('Erro: Usuário não encontrado.');
            return menu(rl);
        }

        const usuarioRemovido = usuarios[indiceUsuario];
        console.log(`\nVocê está prestes a remover o usuário: ${usuarioRemovido.nome} (ID: ${usuarioRemovido.id})`);

        rl.question('Tem certeza que deseja continuar? (s/n): ', (confirmacao) => {
            if (confirmacao.toLowerCase() === 's') {
                usuarios.splice(indiceUsuario, 1);
                console.log('\nUsuário removido com sucesso!');
            } else {
                console.log('\nOperação cancelada.');
            }
            return menu(rl);
        });
    });
}

module.exports = removerUsuario