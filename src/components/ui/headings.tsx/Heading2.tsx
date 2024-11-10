import React from 'react';
import {TextStyle} from 'react-native';

import {Text} from '../text/Text';
import { FontWeight } from '@app/utils/helper';

type PropType = {
  children: React.ReactNode;
  style?: TextStyle;
  weight?: FontWeight
};

export const Heading2 = (props: PropType) => (
  <Text weight={props.weight || 'semiBold'} size={20} style={props.style}>
    {props.children}
  </Text>
);
