import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button, Text} from 'native-base';
import styles from './Details.styles';

interface DetailsProps {
  navigation: any;
  route?: any;
}

const Details: React.FC<DetailsProps> = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Text>Details</Text>
      <Button light onPress={() => navigation.goBack()}>
        <Text>Back </Text>
      </Button>
    </SafeAreaView>
  );
};

export default Details;
