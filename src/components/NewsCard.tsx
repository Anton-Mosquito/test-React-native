import React from 'react';
import {Image} from 'react-native';
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
} from 'native-base';

import data from '../articles.json';

interface NewsCardProps {
  name: string;
  onNavigationPress?: void;
}

const NewsCard: React.FC<NewsCardProps> = ({name, onNavigationPress}) => {
  return (
    <Container>
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
              <Button
                dark
                textStyle={{color: '#87838B'}}
                onPress={onNavigationPress}>
                <Text>Details</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default NewsCard;
