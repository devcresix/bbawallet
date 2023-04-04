import React from 'react';
import {HStack, Banner, Button} from '@react-native-material/core';

interface IStatusBannerProps {
  message: string;
  dismissLabel?: string;
  onDismiss?: () => void;
}

function StatusBanner({message, dismissLabel, onDismiss}: IStatusBannerProps) {
  if (message !== '') {
    return (
      <Banner
        text={message}
        buttons={
          <HStack spacing={2}>
            <Button
              key="dismiss"
              variant="text"
              title={dismissLabel ? dismissLabel : 'Dismiss'}
              compact
              onPress={onDismiss}
            />
          </HStack>
        }
      />
    );
  }

  return <></>;
}

export default StatusBanner;
