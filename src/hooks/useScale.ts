import { useState, useEffect } from 'react';
import { useWindowDimensions, Platform, PixelRatio } from 'react-native';

const MAX_FONT_SCALE = 1.4;
const MAX_LAYOUT_SCALE = 2;

export const useScale = () => {
  const windowDimensions = useWindowDimensions();

  const [fontScale, setFontScale] = useState(1);
  const [layoutScale, setLayoutScale] = useState(1);

  const normalizeFontSize = (size: number) => {
    const newSize = size * Math.min(windowDimensions.scale, MAX_FONT_SCALE);
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
    }
  };

  useEffect(() => {
    const fScale = Math.min(windowDimensions.fontScale, MAX_FONT_SCALE);
    const lScale = Math.min(windowDimensions.scale, MAX_LAYOUT_SCALE);
    setFontScale(fScale);
    setLayoutScale(lScale);
  }, [windowDimensions]);

  return { fontScale, layoutScale, normalizeFontSize };
};
