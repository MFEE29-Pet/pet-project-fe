import { AuthContextProvider } from './AuthContext';

export default function AllContextProviders({ children }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}
