import React, {useState} from 'react';
import * as Font from 'expo-font';
import  AppLoading  from 'expo-app-loading';
import Navigator from './routes/homestack';




//get fonts
const getFonts = () => Font.loadAsync({
        'Nunito-Regular': require('./assets/font/Nunito-Regular.ttf'),
        'Nunito-Bold': require('./assets/font/Nunito-Bold.ttf'),
    });


export default function App() {
  const [fontLoaded, setFontsLoaded] = useState(false);

  if(fontLoaded){
  return (
    <Navigator/>
  );
  }else{
    return (
    <AppLoading
    startAsync={getFonts} 
    onFinish={() => setFontsLoaded(true)} 
    onError={err => console.log(err)}
    />
    );
  }
}


