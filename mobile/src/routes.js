import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from  'react-navigation-stack';

import Main from './screens/Home/Main';
import Profile from './screens/Home/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'IParei'
            },
        },
        Profile,

    }, {
        defaultNavigationOptions: {
            headerTintColor: '#000',
            headerTitleStyle: {
                fontStyle: 'normal'
                //textAlign: 'center'
            },
            headerStyle: {
                backgroundColor: '#e6fff5'
            }
        },
    })

);

export default Routes;