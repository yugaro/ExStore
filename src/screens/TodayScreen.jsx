import React, { useState } from 'react';
import {
  StyleSheet, TextInput, View, KeyboardAvoidingView, Platform,
} from 'react-native';
// import KeyboardSafeView from '../components/KeyboardSafeView';
import CircleButton from '../components/CircleButton';

export default function TodayScreen() {
  // const { navigation } = props;
  const [bodyText, setBodyText] = useState('');

  // const handlePress = () => {
  //   const { currentUser } = firebase.auth();
  //   const db = firebase.firestore();
  //   const ref = db.collection(`users/${currentUser.uid}/memos`);
  //   ref.add({
  //     bodyText,
  //     updatedAt: new Date(),
  //   })
  //     .then(() => {
  //       navigation.goBack();
  //     })
  //     .catch((error) => {
  //       const errorMsg = translateErrors(error.code);
  //       Alert.alert(errorMsg.title, errorMsg.description);
  //     });
  // };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}
    >
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
      <View style={styles.inputContainer}>
        <TextInput
          value={bodyText}
          multiline
          style={styles.input}
          onChangeText={(text) => { setBodyText(text); }}
          autoFocus
          autoCapitalize="none"
        />
      </View>
      {/* </TouchableWithoutFeedback> */}
      <CircleButton
        name="check"
        // onPress={handlePress}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});
