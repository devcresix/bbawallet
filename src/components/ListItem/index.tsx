import React, {ReactNode} from 'react';
import {StyleSheet} from 'react-native';
import {List, useTheme} from 'react-native-paper';

// Utils
import {withTranslation} from '../../hooks/useTranslations';

interface IListItemProps {
  title: string;
  description?: string;
  left?: (props: {color: string; style?: any}) => ReactNode;
  right?: (props: {color: string; style?: any}) => ReactNode;
  onPress?: () => void;
}

function ListItem({title, description, left, right, onPress}: IListItemProps) {
  const {colors} = useTheme();
  return (
    <List.Item
      title={title}
      description={description}
      left={props => (left ? left(props) : null)}
      right={props => (right ? right(props) : null)}
      style={{...styles.listItem, backgroundColor: colors.primaryContainer}}
      onPress={onPress}
    />
  );
}

const styles = StyleSheet.create({
  listItem: {
    marginTop: 6,
  },
});

export default withTranslation()(ListItem);
