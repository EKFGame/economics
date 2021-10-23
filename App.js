import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { View, BackAndroid } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartPlace from "./screens/StartPlace";
import TaskScreen from "./screens/TaskScreen";
import Task from "./screens/Task";
import Outside from "./screens/navigation/OutSide";
import Inside from "./screens/navigation/Inside";
import WebToCheck from "./screens/WebToCheck";
import Lift from "./screens/navigation/lift";
import ActionSpace from "./screens/navigation/actionSpace";
import Questions from "./screens/Questions";
const Stack = createStackNavigator();

class App extends Component {
  
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar style="auto" />
        <NavigationContainer>
        <Stack.Navigator initialRouteName="actionSpace">
          <Stack.Screen
            name="startPlace"
            component={StartPlace}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="taskScreen"
            component={TaskScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="task"
            component={Task}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="outside"
            component={Outside}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="inside"
            component={Inside}
            options={{ headerShown: false }}
          />
            <Stack.Screen
            name="webtocheck"
            component={WebToCheck}
            options={{ headerShown: true }}
            options={{ title: 'Žiniatinklis' }}
          />
            <Stack.Screen
            name="lift"
            component={Lift}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="actionSpace"
            component={ActionSpace}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="questions"
            component={Questions}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </View>

    );
  }
}

export default App;
