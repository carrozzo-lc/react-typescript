import { Dispatch, PropsWithChildren, createContext, useReducer } from "react";
import { ColorActions, colorReducer, initialState } from "./lib/color-reducer";

type ColorContextState = {
  hexColor: string;
  dispatch: Dispatch<ColorActions>;
}

export const ColorContext = createContext<ColorContextState>({ 
  hexColor: '#FFADEF',
} as ColorContextState);

export const ColorProvider = ({ children }: PropsWithChildren) => {
    const [{ hexColor }, dispatch] = useReducer(colorReducer, initialState);


  return <ColorContext.Provider value={{ hexColor: hexColor, dispatch }}>{children}</ColorContext.Provider>
}
