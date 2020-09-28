import { Colors } from 'react-native/Libraries/NewAppScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ComponentScreen from './src/screens/ComponentScreen';
import CounterScreen from './src/screens/CounterScreen';
import HomeScreen from "./src/screens/HomeScreen";
import ImageScreen from './src/screens/ImageScreen';
import ListScreen from './src/screens/ListScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ColorAdjusterScreen from './src/screens/ColorAdjusterScreen';
import ColorsScreen from './src/screens/ColorsScreen';
import ColorAdjusterScreenWithReducer from './src/screens/ColorAdjusterScreenWithReducer';
import TextScreen from './src/screens/TextScreen';
import LoginScreen from './src/screens/LoginScreen';



const navigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Home: HomeScreen,
    Component: ComponentScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Colors: ColorsScreen,
    ColorAdjuster: ColorAdjusterScreen,
    ColorAdjusterWithReducer: ColorAdjusterScreenWithReducer,
    Text: TextScreen,
    Login: LoginScreen
  },
  {
    initialRouteName: "Welcome",
    defaultNavigationOptions: {
      title: "Image Library"
    }
  }
);

export default createAppContainer(navigator);
