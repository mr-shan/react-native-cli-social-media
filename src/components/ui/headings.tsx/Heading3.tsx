import React from 'react';
import {TextStyle} from 'react-native';

import {Text} from '../text/Text';
import { FontWeight } from '@app/utils/helper';

type PropType = {
  children: React.ReactNode;
  style?: TextStyle;
  weight?: FontWeight
};

export const Heading3 = (props: PropType) => (
  <Text weight={props.weight || 'medium'} size={16} style={props.style}>
    {props.children}
  </Text>
);
