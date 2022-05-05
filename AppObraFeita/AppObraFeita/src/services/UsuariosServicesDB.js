import Database from './DbServices';

const DB_EXEC = Database.getConnection();

export const insertUsuario = async (param) => {
 let results = await DB_EXEC('insert into usuarios(id, nome, telefone, sexo, profissao, cep, endereco, email, senha)values(?,?,?,?,?,?,?,?,?)',
 [param.id, param.nome, param.telefone, param.sexo, param.profissao, param.cep, param.endereco, param.email, param.senha]);
 console.log(results);
 return results.rowsAffected;
}

export const getUsuarios = async () => {
 let results = await DB_EXEC('select * from usuarios');
 console.log(results);
 return results.rows._array;
}
  
export const updateUsuario = async (param) => {
 let results = await DB_EXEC('update usuarios set nome=?, telefone=?, sexo=?, profissao=?, cep=?, endereco=?, email=?, senha=? where id=?',
 [param.nome, param.telefone, param.sexo, param.profissao, param.cep, param.endereco, param.email, param.senha, param.id]);
 console.log(results);
 return results.rowsAffected;
}

export const deleteUsuario = async (id) => {
 let results = await DB_EXEC('delete from usuarios where id=?' , [id]);
 console.log(results);
 return results.rowsAffected;
}  