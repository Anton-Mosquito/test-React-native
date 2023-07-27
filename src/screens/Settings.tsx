import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button, Text} from 'native-base';

interface SettingsProps {
  navigation: any;
  route?: any;
}

const Settings: React.FC<SettingsProps> = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>Settings</Text>
      <Button light onPress={() => navigation.goBack()}>
        <Text>Back </Text>
      </Button>
    </SafeAreaView>
  );
};

export default Settings;
