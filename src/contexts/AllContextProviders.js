import { PageContextProvider } from '../Pages/Product/contexts/PageContext';
import { ProductDataContextProvider } from './ProductDataContext';
import { ProductDetailContextProvider } from './ProductDetailContext';
import { StyledEngineProvider } from '@mui/material';
import { CartInfoContextProvider } from './CartInfoContext';

export default function AllContextProviders({ children }) {
  return (
    <ProductDataContextProvider>
      <CartInfoContextProvider>
        <StyledEngineProvider>
          <PageContextProvider>
            <ProductDetailContextProvider>
              {children}
            </ProductDetailContextProvider>
          </PageContextProvider>
        </StyledEngineProvider>
      </CartInfoContextProvider>
    </ProductDataContextProvider>
  );
}
