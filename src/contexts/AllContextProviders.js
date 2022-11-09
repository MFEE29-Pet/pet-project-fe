import { SwitchButtonContextProvider } from './SwitchButtonContext';

export default function AllContextProviders({ children }) {
  return <SwitchButtonContextProvider>{children}</SwitchButtonContextProvider>;
}
