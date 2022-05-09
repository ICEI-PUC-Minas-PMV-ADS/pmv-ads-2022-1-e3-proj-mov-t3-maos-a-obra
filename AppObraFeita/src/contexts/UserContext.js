import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [logado, setLogado] = useState(false);
  const [name, setName] = useState(false);

  return (
    <UserContext.Provider
      value=
      {{
        logado,
        setLogado,
        name,
        setName,
      }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser(){
  const context = useContext(UserContext);
  const { logado, setLogado, name, setName } = context;
  return {logado, setLogado, name, setName };

}

// contexto para definir se o usuário está logado ou não