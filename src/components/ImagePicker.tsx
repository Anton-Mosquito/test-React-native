import React from 'react';
import {Button, Image, View} from 'react-native';
import {
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

export default class Picker extends React.Component {
  state = {
    photo: null,
  };

  handleChoosePhoto = async () => {
    const options: ImageLibraryOptions = {
      selectionLimit: 1,
      mediaType: 'photo',
      assetRepresentationMode: 'auto',
    };

    const result = await launchImageLibrary(options);

    console.log(
      '🚀 ~ file: ImagePicker.tsx ~ line 15 ~ Picker ~ response',
      result,
    );

    // if (result.uri) {
    //   this.setState({photo: result});
    // }
  };

  render() {
    const {photo} = this.state;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {photo && (
          <Image source={{uri: photo.uri}} style={{width: 300, height: 300}} />
        )}
        <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
      </View>
    );
  }
}
