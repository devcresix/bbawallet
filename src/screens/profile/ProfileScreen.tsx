/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {StyleSheet} from 'react-native';

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function ProfileScreen(): any {
  return <></>;
}

const styles = StyleSheet.create({
  telescope: {
    zIndex: 0,
    position: 'absolute',
    top: 50,
    right: 20,
    opacity: 0.1,
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 30,
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  headerHeadline: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  detailsContainer: {
    marginHorizontal: 20,
    justifyContent: 'space-between',
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  detailsLabel: {
    marginLeft: 23,
    fontSize: 18,
  },
  featuredContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featuredView: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 25,
  },
  buttonsContainer: {
    marginHorizontal: 20,
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  buttonsLabel: {
    marginLeft: 23,
    fontSize: 18,
  },
  optionsContainer: {
    marginHorizontal: 20,
    justifyContent: 'flex-start',
    marginTop: 10,
    marginBottom: 10,
  },
  optionsOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionsButton: {
    alignItems: 'flex-start',
    marginTop: 10,
  },
  optionsLabel: {
    marginLeft: 23,
    fontSize: 18,
  },
});

export default ProfileScreen;
