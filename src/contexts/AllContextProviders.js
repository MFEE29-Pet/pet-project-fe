import { PageContextProvider } from '../Pages/Product/contexts/PageContext';
import { ProductDataContextProvider } from './ProductDataContext';
import { ProductDetailContextProvider } from './ProductDetailContext';
import { StyledEngineProvider } from '@mui/material';

export default function AllContextProviders({ children }) {
  return (
    <ProductDataContextProvider>
        <StyledEngineProvider>
          <PageContextProvider>
            <ProductDetailContextProvider>
              {children}
            </ProductDetailContextProvider>
          </PageContextProvider>
        </StyledEngineProvider>
    </ProductDataContextProvider>
  );
}
