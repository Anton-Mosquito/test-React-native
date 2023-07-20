import React, {useState} from 'react';
import {Text, View, SafeAreaView, Button} from 'react-native';
import styles from './MainPage.styles';

const MainPage = () => {
  const [active, setActive] = useState(false);
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.firstContainer}>
          <Text>first</Text>
        </View>
        <View style={styles.secondContainer}>
          <Text>second</Text>
        </View>
        <View style={active ? styles.thirdContainer : styles.secondContainer}>
          <Text>third</Text>
        </View>
        <Button title="press me" onPress={() => setActive(!active)} />
      </View>
    </SafeAreaView>
  );
};

export default MainPage;
