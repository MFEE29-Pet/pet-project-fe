import { PageContextProvider } from '../Pages/Product/contexts/PageContext';
import { ProductDataContextProvider } from './ProductDataContext';
import { ProductDetailContextProvider } from './ProductDetailContext';

export default function AllContextProviders({ children }) {
  return (
    <ProductDataContextProvider>
      <PageContextProvider>
        <ProductDetailContextProvider>{children}</ProductDetailContextProvider>
      </PageContextProvider>
    </ProductDataContextProvider>
  );
}
