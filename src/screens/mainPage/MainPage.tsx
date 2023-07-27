import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './MainPage.styles';
import NewsCard from '../../components/NewsCard';

const MainPage: React.FC = ({navigation}) => {
  const ITVDN = 'I love ITVDN';
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <NewsCard
        name="Mr Cat"
        onNavigationPress={() => navigation.navigate('Details', {itvdn: ITVDN})}
      />
    </SafeAreaView>
  );
};

export default MainPage;
