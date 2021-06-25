import React from 'react';
import {View, Button} from 'react-native';

function Notifications({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to Notifications"
      />
    </View>
  );
}
export default Notifications;
