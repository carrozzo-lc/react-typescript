import { Dispatch } from 'react';
import {
  getComplementColors,
  getTriadColors,
} from '../../lib/get-related-colors';
import RelatedColorPalette from './related-color-palette';
import { ColorActions } from '../../lib/color-reducer';

type RelatedColorsProps = {
  hexColor: string;
  dispatch: Dispatch<ColorActions>;
};

const RelatedColors = ({ hexColor, dispatch }: RelatedColorsProps) => {
  const triadColors = getTriadColors(hexColor);
  const complementColors = getComplementColors(hexColor);

  return (
    <>
      <RelatedColorPalette 
        title="Triad Colors" 
        dispatch={dispatch}
        hexColors={triadColors} 
      />
      <RelatedColorPalette
        title="Complimentary Colors"
        dispatch={dispatch}
        hexColors={complementColors}
      />
    </>
  );
};

export default RelatedColors;
