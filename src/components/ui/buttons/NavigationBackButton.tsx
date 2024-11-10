import React from 'react';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {horizontalScale, verticalScale} from '@app/utils/scaling';
import Colors from '@app/utils/colors';

export const NavigationBackButton = ({onPress}: {onPress: () => void}) => {
  return (
    <TouchableOpacity style={styles.backButton} onPress={onPress}>
      <FontAwesomeIcon icon={faArrowLeft} size={18} color={Colors.text500} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    left: horizontalScale(8),
    top: verticalScale(12),
    padding: horizontalScale(8),
  },
});
