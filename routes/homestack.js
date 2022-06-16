import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../screens/home';
import ReviewsDetails from "../screens/reviewsDetails";

const screens = {
    Home: {
        screen: Home
    },
    reviewsDetails: {
        screen: ReviewsDetails
    }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);