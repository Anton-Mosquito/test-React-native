import React from 'react';
import {
  SafeAreaView,
  Image,
  Dimensions,
  useWindowDimensions,
  Platform,
} from 'react-native';
import styles from './MainPage.styles';
import {
  Container,
  Text,
  Content,
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Button,
} from 'native-base';

import data from './articles.json';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

console.log('Window', window, 'Screen', screen);

const MainPage = () => {
  const windowSize = useWindowDimensions();

  console.log('WindowDimentionsWidth', windowSize);
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Container >
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail
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
                    uri: 'https://lh3.googleusercontent.com/proxy/FFxjQx-u8bE-rcMtPbOMz_scLpEq43dy9FbWWuMHE6dHJgTnZEOgNNCM2vxfrkzWZqK_ZIRwW9jdxiOwg-rSHncpfSS0zdfxpid4NSqoNgYdIR-V',
                  }}
                  style={{height: 200, width: 200, flex: 1}}
                />
                <Text>{data.articles[0].title}</Text>
                <Text>
                  {Platform.OS == 'android'
                    ? 'Hello Students'
                    : 'Hello Android'}
                </Text>
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
