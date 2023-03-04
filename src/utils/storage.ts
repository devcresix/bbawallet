import EncryptedStorage from 'react-native-encrypted-storage';

const storage = {
  getItem: async (key: any) => {
    try {
      const value = await EncryptedStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      }
      return null;
    } catch (error) {
      console.log(error);
      await EncryptedStorage.removeItem(key);
      return null;
    }
  },
  setItem: async (key: string, value: any) => {
    try {
      await EncryptedStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  },
  removeItem: async (key: string) => {
    try {
      await EncryptedStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  },
  clear: async () => {
    try {
      await EncryptedStorage.clear();
    } catch (error) {
      console.log(error);
    }
  },
};

export default storage;
