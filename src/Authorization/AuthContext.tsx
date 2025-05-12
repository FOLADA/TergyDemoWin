// import React, { createContext, useContext, useState } from "react";
// import axios from "axios";

// const apikey = import.meta.env.VITE_YOUR_CRUD_API_KEY;

// interface AuthContextType {
//   login: (credentials: { username: string; password: string }) => Promise<void>;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const login = async ({ username, password }: { username: string; password: string }) => {
//     try {
//       const res = await axios.get(`https://crudapi.co.uk/api/v1/users`, {
//         headers: { Authorization: `Bearer ${apikey}` },
//       });

//       const foundUser = res.data.items.find((user: any) => user.username === username);

//       if (!foundUser) {
//         throw new Error("User not registered. Register first.");
//       }

//       if (foundUser.password !== password) {
//         throw new Error("Invalid username or password.");
//       }

//       setUser(foundUser);
//     } catch (error: any) {
//       throw new Error(error.message || "Login failed.");
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ login }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };
