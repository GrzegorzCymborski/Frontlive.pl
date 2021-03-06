import { ReactNode, createContext, useContext } from 'react';
import { useToggle } from '../utils/useToggle';

type State = {
  isMenuVisible: boolean;
  toggleMenu: () => void;
};

type HeaderProviderProps = { children: ReactNode };

const HeaderStateContext = createContext<State | undefined>(undefined);

export const HeaderProvider = ({ children }: HeaderProviderProps) => {
  const [isMenuVisible, toggleMenu] = useToggle();

  return (
    <HeaderStateContext.Provider value={{ isMenuVisible, toggleMenu }}>
      {children}
    </HeaderStateContext.Provider>
  );
};

export const useHeaderState = () => {
  const context = useContext(HeaderStateContext);
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider');
  }
  return context;
};
