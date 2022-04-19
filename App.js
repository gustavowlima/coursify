import { useFonts, Roboto_400Regular, Roboto_500Medium, 
  Roboto_700Bold} from '@expo-google-fonts/roboto';

import AppLoading from 'expo-app-loading'
import Router from './src/Routes';



export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular, Roboto_500Medium, Roboto_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }
  return (
    <>
      <Router />
    </>
  );
}


