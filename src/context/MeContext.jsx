import { createContext, useState } from "react";

export const MeContext = createContext('')

export const MeProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({ name: '' })

  return (
    <MeContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </MeContext.Provider>
  )
}