
import React from 'react';
import {
  SafeAreaView,

} from 'react-native';
import TaskContextProvider from './screens/taskProvide';
import TaskDetails from './screens/taskDetails';


function App() {

  return (
    <SafeAreaView >
      <TaskContextProvider>
        <TaskDetails />
      </TaskContextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
