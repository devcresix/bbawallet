import {useDispatch, useSelector} from 'react-redux';

import storage from '../utils/storage';
import storageKeys from '../config/storageKeys';
import {setAddressBook} from '../store/sessionSlice';
import {RootState} from '../store';
import {IAddress} from '../types';

const useAddressBook = () => {
  const dispatch = useDispatch();
  const {addresses} = useSelector((state: RootState) => state.session);

  const loadAddresses = async () => {
    try {
      const addressStorage = await storage.getItem(storageKeys.ADDRESSBOOK);
      if (addressStorage) {
        dispatch(setAddressBook(addressStorage));
      }
    } catch (error) {
      console.log('ERROR:', error);
    }
  };

  const addAddress = async (address: IAddress) => {
    try {
      await storage.setItem(storageKeys.ADDRESSBOOK, [...addresses, address]);
      await loadAddresses();
    } catch (error) {
      console.log('ERROR:', error);
    }
  };

  const delAddress = async (address: IAddress) => {
    try {
      await storage.setItem(
        storageKeys.ADDRESSBOOK,
        addresses.filter(ad => ad.address !== address.address),
      );
      await loadAddresses();
    } catch (error) {
      console.log('ERROR:', error);
    }
  };

  return {
    addresses,
    loadAddresses,
    addAddress,
    delAddress,
  };
};

export default useAddressBook;
