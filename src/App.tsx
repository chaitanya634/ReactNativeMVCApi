
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import UserService from './Services/UserService';
import UserModel from './Models/UserModel';


function App(): JSX.Element {

  const [users, setUsers] = useState<Array<UserModel> | null>(null)

  UserService().then(users => {
    setUsers(users)
  })

  return (
    <SafeAreaView >
      {
        users == null ? (<ActivityIndicator />) : (
          <FlatList
            data={users}
            renderItem={({ item }) => (
              <Text>{item.firstName}</Text>
            )}
          />
        )
      }
    </SafeAreaView>
  );
}


export default App;
