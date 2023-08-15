import React from 'react';
import {Image} from 'react-native';
import {
  Body,
  Button,
  Card,
  CardItem,
  Content,
  Left,
  Text,
  Thumbnail,
} from 'native-base';

interface NewsCardProps {
  author?: string;
  title?: string;
  onNavigationPress?: void;
  image?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  author,
  onNavigationPress,
  image,
}) => {
  let newsImage = image
    ? image
    : 'https://static.theprint.in/wp-content/uploads/2020/04/Cat-representational-image-e1587622908176-696x391.jpg';
  return (
    <Content>
      <Card style={{flex: 1}}>
        <CardItem>
          <Left>
            <Thumbnail
              // @ts-ignore
              source={{
                uri: 'https://static.theprint.in/wp-content/uploads/2020/04/Cat-representational-image-e1587622908176-696x391.jpg',
              }}
            />
            <Body>
              <Text>{author}</Text>
              <Text note>April 15, 2016</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Body>
            <Image
              source={{
                uri: newsImage,
              }}
              style={{height: 200, width: 200, flex: 1}}
            />
            <Text>{title}</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Button
              primary
              textStyle={{color: '#87838B'}}
              //@ts-ignore
              onPress={onNavigationPress}>
              <Text>Details</Text>
            </Button>
          </Left>
        </CardItem>
      </Card>
    </Content>
  );
};

export default NewsCard;
