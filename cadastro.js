let proximoId = 1;

function cadastrarUsuario(rl, menu, usuarios) {
    rl.question('Digite o nome do usuário: ', (nome) => {
        rl.question('Digite o e-mail do usuário: ', (email) => {
            
            const emailExistente = usuarios.find(u => u.email === email);
            
            if (emailExistente) {
                console.log('\nErro: Este e-mail já está cadastrado.');
                menu(rl);
                return;
            }

            rl.question('Digite o numero de telefone do usuário: ', (telefone) => {
                const novoUsuario = {
                    id: proximoId++,
                    nome: nome,
                    email: email,
                    telefones: [telefone] 
                };

                usuarios.push(novoUsuario);
                console.log('\nUsuário cadastrado com sucesso!');
                menu(rl);
            });
        });
    });
}

module.exports = cadastrarUsuario