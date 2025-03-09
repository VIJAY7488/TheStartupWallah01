import { createContext, useContext, useState, ReactNode } from "react";

// Define the context type
interface PasswordVisibilityContextType {
  isShowPassword: boolean;
  toggleShowPassword: () => void;
}

// Create the context with a default undefined value
const PasswordVisibilityContext = createContext<PasswordVisibilityContextType | undefined>(undefined);

// Provider component with TypeScript types
interface PasswordVisibilityProviderProps {
  children: ReactNode;
}

export const PasswordVisibilityProvider: React.FC<PasswordVisibilityProviderProps> = ({ children }) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const toggleShowPassword = () => {
    setIsShowPassword((prev) => !prev);
  };

  return (
    <PasswordVisibilityContext.Provider value={{ isShowPassword, toggleShowPassword }}>
      {children}
    </PasswordVisibilityContext.Provider>
  );
};

// Custom hook for easy usage
export const usePasswordVisibility = (): PasswordVisibilityContextType => {
  const context = useContext(PasswordVisibilityContext);
  if (!context) {
    throw new Error("usePasswordVisibility must be used within a PasswordVisibilityProvider");
  }
  return context;
};
