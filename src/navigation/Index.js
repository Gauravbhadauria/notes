import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ViewNotes from '../screens/ViewNotes';
import AddNotes from '../screens/AddNotes';
import WelcomeScreen from '../components/WelcomeScreen';
import SideDrawer from '../screens/SideDrawer';
import PaymentGateway from '../screens/PaymentGateway';
const StackNavigator = createStackNavigator(
  {
    ViewNotes: {
      screen: ViewNotes,
    },
    AddNotes: {
      screen: AddNotes,
    },
    WelcomeScreen: {
      screen: WelcomeScreen,
    },
    PaymentGateway: {
      screen: PaymentGateway,
    },
    SideDrawer: {
      screen: SideDrawer,
    },
  },
  {
    initialRouteName: 'PaymentGateway',
    headerMode: 'none',
    mode: 'modal',
  },
);
export default createAppContainer(StackNavigator);
