import React from 'react';
import {TextStyle} from 'react-native';

import {Text} from '@app/components/ui/text/Text';
import { FontWeight } from '@app/utils/helper';

type PropType = {
  children: React.ReactNode;
  style?: TextStyle;
  weight?: FontWeight
};

export const Heading1 = (props: PropType) => (
  <Text weight={props.weight || 'bold'} size={24} style={props.style}>
    {props.children}
  </Text>
);
