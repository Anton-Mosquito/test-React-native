import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import styles from './MainPage.styles';
import NewsCard from '../../components/NewsCard';

import data from '../../articles.json';

const MainPage: React.FC = ({navigation}) => {
  const articles = data.articles;
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView style={{opacity: 1}}>
        {articles.map((article, index) => (
          <NewsCard
            //@ts-ignore
            key={index}
            title={article.title}
            author={article.author}
            onNavigationPress={() => navigation.navigate('Details')}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainPage;
