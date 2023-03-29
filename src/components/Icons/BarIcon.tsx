import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {IBarIcon} from '../types';

const BarIcon = ({color, size, name}: IBarIcon) => {
  return (
    <MaterialCommunityIcons
      color={color}
      size={size}
      name={name}
      style={{marginTop: 5}}
    />
  );
};

export default BarIcon;
