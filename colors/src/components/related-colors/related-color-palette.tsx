import { Dispatch } from 'react';
import { ColorActions } from '../../lib/color-reducer';
import ColorChangeSwatch from '../shared/color-change-swatch';

type RelatedColorPaletteProps = {
  title: string;
  hexColors: string[];
  dispatch: Dispatch<ColorActions>
};

const RelatedColorPalette = ({
  title,
  hexColors,
  dispatch
}: RelatedColorPaletteProps) => {

  const changeColorHandler = (color: string) => {
    dispatch({
      type: 'update-hex-color',
      payload: { hexColor: color }
    })    
  }

  return (
    <section>
      <h3 className="mb-4">{title}</h3>
      <div className="grid grid-cols-3 gap-2">
        {hexColors.map((hexColor) => {
          return (
            <ColorChangeSwatch
              key={hexColor}
              hexColor={hexColor}
              className="w-full h-full"
              onClick={() => changeColorHandler(hexColor)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RelatedColorPalette;
