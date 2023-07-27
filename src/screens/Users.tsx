import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button, Text} from 'native-base';

interface UsersProps {
  navigation: any;
  route?: any;
}

const Users: React.FC<UsersProps> = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>Users</Text>
    </SafeAreaView>
  );
};

export default Users;
