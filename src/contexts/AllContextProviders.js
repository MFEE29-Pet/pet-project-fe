import ProductDataContext from './ProductDataContext';
import { SwitchButtonContextProvider } from './SwitchButtonContext';

export default function AllContextProviders({ children }) {
  return (
    <SwitchButtonContextProvider>
      <ProductDataContext>{children}</ProductDataContext>
    </SwitchButtonContextProvider>
  );
}
