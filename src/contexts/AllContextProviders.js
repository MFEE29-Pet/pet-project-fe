import { PageContextProvider } from '../Pages/Product/contexts/PageContext';
import { ProductDataContextProvider } from './ProductDataContext';

export default function AllContextProviders({ children }) {
  return (
    <ProductDataContextProvider>
      <PageContextProvider>{children}</PageContextProvider>
    </ProductDataContextProvider>
  );
}
