import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Button, Text} from 'native-base';
import styles from './Details.styles';
import Picker from '../../components/ImagePicker';

interface DetailsProps {
  navigation: any;
  route?: any;
}

const Details: React.FC<DetailsProps> = ({navigation, route}) => {
  const articleDetails = route.params.articleDetails;

  const article = articleDetails ? articleDetails : 'There is no details here ';
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView style={{flex: 1}}>
        <Text style={{alignSelf: 'center'}}>{article}</Text>
        <Button light onPress={() => navigation.goBack()}>
          <Text>Back </Text>
        </Button>
        <Picker />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
