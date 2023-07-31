import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Button, Text} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import NewsCard from '../components/NewsCard';
import {fetchNewsIndia} from '../redux/actions';

interface MainNewsProps {
  navigation: any;
  route?: any;
}

const MainNews: React.FC<MainNewsProps> = ({navigation}) => {
  const state = useSelector(state => state.mainNews.news);
  const articles = state;

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{opacity: 1}}>
        <Button
          primary
          style={{alignSelf: 'center'}}
          onPress={() => dispatch(fetchNewsIndia())}>
          <Text>Fetch news</Text>
        </Button>
        {articles ? (
          articles.map((article, index) => (
            <NewsCard
              //@ts-ignore
              key={index}
              title={article.title}
              author={article.title}
              onNavigationPress={() => console.log('News Press')}
            />
          ))
        ) : (
          <></>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainNews;
