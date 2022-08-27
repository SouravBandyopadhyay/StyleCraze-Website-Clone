import React, { useState } from "react";
export const AppContext = React.createContext()
function AppContextProvider({ children }) {
  const [authState, setAuthState] = useState({ isAuth: false, token: null });
  return (
    <>
      <AppContextProvider value={{ authState, setAuthState }}>
        {children}
      </AppContextProvider>
    </>
  );
}

export default AppContextProvider;
