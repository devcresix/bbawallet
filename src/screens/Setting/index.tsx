import React from 'react';

// Components
// import GlobalLayout from '../../components/Global/GlobalLayout';
import GlobalText from '../../components/Global/GlobalText';
import CardButton from '../../components/Card/CardButton';
import Layout from '../../components/Layout';

// const styles = StyleSheet.create({
//   appVersion: {
//     position: 'absolute',
//     bottom: 8,
//     left: 0,
//     right: 0,
//     textAlign: 'center',
//   },
// });

function SettingScreen(): JSX.Element {
  return (
    <Layout>
      <>
        <>
          <CardButton
            title="Address Book"
            actionIcon="right"
            image={require('../../assets/images/icons/address-book.png')}
            onPress={() => {}}>
            <GlobalText type="caption">Address Book</GlobalText>
          </CardButton>
          <CardButton title="Language" actionIcon="right" onPress={() => {}}>
            <GlobalText type="caption">English</GlobalText>
          </CardButton>
          <CardButton title="Network" actionIcon="right" onPress={() => {}}>
            <GlobalText type="caption">mainnet</GlobalText>
          </CardButton>
          <CardButton
            title="Trusted Apps"
            actionIcon="right"
            onPress={() => {}}
          />
          <CardButton title="Support" actionIcon="right" onPress={() => {}} />
          <CardButton title="About Us" actionIcon="right" onPress={() => {}} />
        </>
      </>
    </Layout>
  );
}

export default SettingScreen;
