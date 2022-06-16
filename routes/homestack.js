import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../screens/home';
import ReviewsDetails from "../screens/reviewsDetails";

const screens = {
    Home: {
        screen: Home,
        navigationOptions:{
            title:'GameZone',
            // headerStyle:{
            //     backgroundColor:'#f4511e',
            // }
        }
    },
    reviewsDetails: {
        screen: ReviewsDetails,
        navigationOptions:{
            title:'Reviews Details',
            // headerStyle:{
            //     backgroundColor:'#f4511e',
            // }
        }
    }
}
const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'#fff',
        headerStyle:{
            backgroundColor:'#f4511e',
            height:60,
        }
    }
});

export default createAppContainer(HomeStack);