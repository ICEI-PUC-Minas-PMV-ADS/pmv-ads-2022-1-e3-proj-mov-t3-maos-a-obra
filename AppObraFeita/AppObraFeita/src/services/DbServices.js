import * as SQLite from 'expo-sqlite';

export const Database = {

  getConnection: () => {
    const db = SQLite.openDatabase('obra_feita.db');

    db.transaction((tx) => {
  tx.executeSql('create table if not exists usuario (id integer primary key not null, nome text not null, telefone integer not null, sexo text not null, profissao text not null, cep integer not null, endereco text not null, email text not null, senha text');
});

  const ExecuteQuery = (sql, params = []) => {
    new Promise((resolve, reject) => {
      db.transaction((trans) => {
        trans.executeSql(
          sql,
          params,
          (trans, results) => {
            resolve(results);
          },
          (error) => {
            reject(error);
          }
        );
      });
    });
    
    return ExecuteQuery;
  };
  },
};

export default Database;