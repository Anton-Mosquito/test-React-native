import React from 'react';
import {Image, SafeAreaView} from 'react-native';
import styles from './MainPage.styles';
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Left,
  Text,
  Thumbnail,
  Header,
} from 'native-base';

import data from './articles.json';
import {AppProps} from '../App';

interface MainPageProps extends AppProps {
  name: string;
}

const MainPage: React.FC<MainPageProps> = ({name}) => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Container>
        <Header />
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail
                  // @ts-ignore
                  source={{
                    uri: 'https://static.theprint.in/wp-content/uploads/2020/04/Cat-representational-image-e1587622908176-696x391.jpg',
                  }}
                />
                <Body>
                  <Text>{data.articles[0].author}</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={{
                    uri: 'https://static.theprint.in/wp-content/uploads/2020/04/Cat-representational-image-e1587622908176-696x391.jpg',
                  }}
                  style={{height: 200, width: 200, flex: 1}}
                />
                <Text>{data.articles[0].title}</Text>
                <Text>{name}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}} />
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    </SafeAreaView>
  );
};

export default MainPage;
