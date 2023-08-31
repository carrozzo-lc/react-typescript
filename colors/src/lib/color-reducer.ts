import { rgb } from 'color-convert';

export type UpdateHexColorAction = {
  type: 'update-hex-color';
  payload: {
    hexColor: string;
  };
};

type UpdateRGBColorAction = {
  type: 'update-rgb-color';
  payload: { rgb: [number, number, number] }
};

export type ColorActions = UpdateHexColorAction | UpdateRGBColorAction;

type ColorState = {
  hexColor: string;
}

export const initialState: ColorState = {
  hexColor: '#bada55'
}

export const colorReducer = (
  state: ColorState = initialState,
  action: ColorActions
) => {
  if (action.type === 'update-hex-color') {
    const { hexColor } = action.payload;
    return { ...state, hexColor };
  }
  if (action.type === 'update-rgb-color') {
    const hexColor = '#' + rgb.hex(action.payload.rgb);
    return { ...state, hexColor };
  } 

  return state;
}
