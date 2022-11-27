import { PageContextProvider } from '../Pages/Product/contexts/PageContext';
import { StyledEngineProvider } from '@mui/material';
import { AuthContextProvider } from './AuthContext';
import { CartInfoContextProvider } from '../Pages/Product/contexts/CartInfoContext';
import { IsLovedContextProvider } from '../Pages/Product/contexts/IsLovedContext';

export default function AllContextProviders({ children }) {
  return (
    <StyledEngineProvider>
      <AuthContextProvider>
        <CartInfoContextProvider>
          <IsLovedContextProvider>
            <PageContextProvider>
            {children}
            </PageContextProvider>
          </IsLovedContextProvider>
        </CartInfoContextProvider>
      </AuthContextProvider>
    </StyledEngineProvider>
  );
}
