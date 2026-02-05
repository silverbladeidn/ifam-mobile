import { createContext, ReactNode, useContext, useState } from "react";

// Dummy user data
const DUMMY_USERS = [
  {
    id: 1,
    username: "driver1",
    password: "123456",
    name: "Budi Santoso",
    role: "driver",
    vehicle: "Toyota Avanza",
    plate: "B 1234 XYZ",
  },
  {
    id: 2,
    username: "staff1",
    password: "123456",
    name: "Siti Nurhaliza",
    role: "staff",
    vehicle: "Honda Brio",
    plate: "B 5678 ABC",
  },
];

interface User {
  id: number;
  username: string;
  name: string;
  role: string;
  vehicle: string;
  plate: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (
    username: string,
    password: string,
  ): Promise<boolean> => {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    const foundUser = DUMMY_USERS.find(
      (u) => u.username === username && u.password === password,
    );

    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      setIsLoading(false);
      return true;
    }

    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
