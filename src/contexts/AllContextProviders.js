import { PageContextProvider } from '../Pages/Product/contexts/PageContext';
import { StyledEngineProvider } from '@mui/material';
import { AuthContextProvider } from './AuthContext';
import { CartInfoContextProvider } from '../Pages/Product/contexts/CartInfoContext';
import { IsLovedContextProvider } from '../Pages/Product/contexts/IsLovedContext';
import { MemberContextProvider } from './MemberContext';
export default function AllContextProviders({ children }) {
  return (
    <StyledEngineProvider>
      <MemberContextProvider>
        <AuthContextProvider>
          <CartInfoContextProvider>
            <IsLovedContextProvider>
              <PageContextProvider>{children}</PageContextProvider>
            </IsLovedContextProvider>
          </CartInfoContextProvider>
        </AuthContextProvider>
      </MemberContextProvider>
    </StyledEngineProvider>
  );
}
