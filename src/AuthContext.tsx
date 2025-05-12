import { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextType {
  user: any;
  login: (user: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);  // You can manage the user here, maybe from localStorage or Firebase

  const login = (user: any) => setUser(user);  // Set user when logged in
  const logout = () => setUser(null);  // Set user to null on logout

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
