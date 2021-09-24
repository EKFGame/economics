import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BrowserScreen from "./screens/Browser";
import StartPlace from "./screens/StartPlace";
import TaskScreen from "./screens/TaskScreen";
const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="taskScreen">
          <Stack.Screen
            name="startPlace"
            component={StartPlace}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="browser"
            component={BrowserScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="taskScreen"
            component={TaskScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
