import React from 'react';
import {Text as ReactText, TextStyle} from 'react-native';

import {FontWeight, getFontStyle} from '@app/utils/helper';
import Colors from '@app/utils/colors';
import { useScale } from '@app/hooks/useScale';

type PropType = {
  children: React.ReactNode;
  size?: number;
  weight?: FontWeight;
  style?: TextStyle;
};

export const Text = (props: PropType) => {
  const { fontScale, normalizeFontSize } = useScale();

  let fontSize = (props.size || 14) * Math.min(fontScale, 1.5);
  fontSize = normalizeFontSize(fontSize);

  return (
    <ReactText
      maxFontSizeMultiplier={1.6}
      style={{
        fontFamily: getFontStyle(props.weight || 'regular'),
        fontSize: fontSize,
        color: Colors.text500,
        ...props.style,
      }}>
      {props.children}
    </ReactText>
  );
};
