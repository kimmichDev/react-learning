import React, { createContext, useState } from "react";

type AuthContextPropType = {
  children: React.ReactNode;
}

type UserType = {
  name: string;
  isAdmin: boolean;
}
type UserContextType = {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>
}
export const AuthContext = createContext<UserContextType | null>(null);
const AuthContextProvider = ({ children }: AuthContextPropType) => {
  const [user, setUser] = useState<UserType | null>(null);
  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
