function listarUsuarios(rl, menu, usuarios) {
    if (usuarios.length === 0) {
        console.log("Não há usuários cadastrados.");
        return menu(rl);
    }

    console.log("--- Lista de Usuários ---");

    usuarios.forEach(usuario => {
        console.log(`\nID: ${usuario.id}`);
        console.log(`Nome: ${usuario.nome}`);
        console.log(`E-mail: ${usuario.email}`);
        
        console.log("Telefones:");
        usuario.telefones.forEach(telefone => {
            console.log(`- ${telefone}`);
        });
        console.log("------------------------");
    menu(rl)
    });
}


module.exports = listarUsuarios