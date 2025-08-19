function atualizarUsuario(rl, menu, usuarios) {
    if (usuarios.length === 0) {
        console.log("Não há usuários cadastrados para atualizar.");
        return menu(rl);
    }

    console.log("--- Usuários Cadastrados ---");
    usuarios.forEach(usuario => {
        console.log(`ID: ${usuario.id} | Nome: ${usuario.nome} | E-mail: ${usuario.email}`);
    });
    console.log("----------------------------");

    rl.question('Digite o ID do usuário que deseja atualizar: ', (id) => {
        const usuarioEncontrado = usuarios.find(u => u.id === parseInt(id));

        if (!usuarioEncontrado) {
            console.log('Erro: Usuário não encontrado.');
            return menu(rl);
        }

        console.log(`\nUsuário encontrado: ${usuarioEncontrado.nome}`);
        
        rl.question(`Digite o novo nome (atual: ${usuarioEncontrado.nome}): `, (novoNome) => {
            rl.question(`Digite o novo e-mail (atual: ${usuarioEncontrado.email}): `, (novoEmail) => {
                const emailExistente = usuarios.find(u => u.email === novoEmail && u.id !== usuarioEncontrado.id);
                
                if (emailExistente) {
                    console.log('Erro: Este e-mail já está em uso por outro usuário.');
                    return menu(rl);
                }

                const telefonesAdicionados = [];
                function adicionarTelefones() {
                    rl.question('Digite um telefone para adicionar (ou "fim" para terminar): ', (telefone) => {
                        if (telefone.toLowerCase() === 'fim') {
                            
                            if (novoNome.trim() !== '') {
                                usuarioEncontrado.nome = novoNome;
                            }
                            usuarioEncontrado.email = novoEmail;
                            usuarioEncontrado.telefones = usuarioEncontrado.telefones.concat(telefonesAdicionados);

                            console.log('\nUsuário atualizado com sucesso!');
                            return menu(rl);
                        }
                        
                        telefonesAdicionados.push(telefone);
                        console.log(`Telefone ${telefone} adicionado temporariamente. Digite outro ou "fim".`);
                        adicionarTelefones();
                    });
                }
                
                adicionarTelefones();
            });
        });
    });
}

module.exports = atualizarUsuario
