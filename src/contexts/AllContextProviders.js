import { PageContextProvider } from '../Pages/Product/contexts/PageContext';
import { StyledEngineProvider } from '@mui/material';

export default function AllContextProviders({ children }) {
  return (

    <StyledEngineProvider>
      <PageContextProvider>
        {children}
      </PageContextProvider>
    </StyledEngineProvider>

  );
}
