import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';


interface DialogContextType {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  showDialog: boolean;
  setShowDialog: Dispatch<SetStateAction<boolean>>;
}

const defaultContext: DialogContextType = {
  showMenu: false,
  setShowMenu: () => {},
  showDialog: false,
  setShowDialog: ()=>{},
};

const DialogContext = createContext<DialogContextType>(defaultContext);


export const DialogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showDialog, setShowDialog] = useState<boolean>(false)

  return (
    <DialogContext.Provider value={{
      showMenu,
      setShowMenu,
      showDialog,
      setShowDialog,
    }}>
      {children}
    </DialogContext.Provider>
  );
};

// Create a custom hook to use the context
export const useDialogContext = () => useContext(DialogContext);
