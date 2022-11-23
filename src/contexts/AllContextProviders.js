import { PageContextProvider } from '../Pages/Product/contexts/PageContext';
import { StyledEngineProvider } from '@mui/material';
import { AuthContextProvider } from './AuthContext';
import { CartInfoContextProvider } from '../Pages/Product/contexts/CartInfoContext';

export default function AllContextProviders({ children }) {
  return (
    <StyledEngineProvider>
      <AuthContextProvider>
        <CartInfoContextProvider>
          <PageContextProvider>{children}</PageContextProvider>
        </CartInfoContextProvider>
      </AuthContextProvider>
    </StyledEngineProvider>
  );
}
