import { PageContextProvider } from '../Pages/Product/contexts/PageContext';
import { StyledEngineProvider } from '@mui/material';
import { AuthContextProvider } from './AuthContext';

export default function AllContextProviders({ children }) {
  return (
    <StyledEngineProvider>
      <AuthContextProvider>
        <PageContextProvider>{children}</PageContextProvider>
      </AuthContextProvider>
    </StyledEngineProvider>
  );
}
