
import React from 'react';
import {
  SafeAreaView, StatusBar, View,

} from 'react-native';
import TaskContextProvider from './screens/taskProvide';
import TaskDetails from './screens/taskDetails';


function App() {

  return (
    <SafeAreaView >
      <View>
      <StatusBar backgroundColor="lightgreen" />
      

      <TaskContextProvider>
        <TaskDetails />
      </TaskContextProvider>
      </View>
    </SafeAreaView>
  );
}


export default App;
