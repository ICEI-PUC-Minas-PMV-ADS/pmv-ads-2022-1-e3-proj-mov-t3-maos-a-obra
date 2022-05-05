import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [logado, setLogado] = useState(false);
  const [nome, setNome] = useState(false);

  return (
    <UserContext.Provider
      value=
      {{
        logado,
        setLogado,
        nome,
        setNome,
      }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser(){
  const context = useContext(UserContext);
  const { logado, setLogado, nome, setNome } = context;
  return {logado, setLogado, nome, setNome };

}

// contexto para definir se o usuário está logado ou não