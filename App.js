import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ComponentScreen from './src/screens/ComponentScreen';
import HomeScreen from "./src/screens/HomeScreen";
import ImageScreen from './src/screens/ImageScreen';
import ListScreen from './src/screens/ListScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

const navigator = createStackNavigator(
  {
    welcome: WelcomeScreen,
    Home: HomeScreen,
    Component: ComponentScreen,
    List: ListScreen,
    Image: ImageScreen
  },
  {
    initialRouteName: "welcome",
    defaultNavigationOptions: {
      title: "Image Library"
    }
  }
);

export default createAppContainer(navigator);
