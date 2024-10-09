import { useEffect } from 'react'
import { useColorScheme } from 'react-native'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { Provider } from 'app/provider'
import { NativeToast } from '@my/ui/src/NativeToast'

export const unstable_settings = {
  // Ensure that reloading on `/user` keeps a back button present.
  initialRouteName: 'Home',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Gilroy-Regular': require('../../../packages/app/assets/fonts/Gilroy-Regular.ttf'),
    'Gilroy-Bold': require('../../../packages/app/assets/fonts/Gilroy-Bold.ttf'),
    'Gilroy-Light': require('../../../packages/app/assets/fonts/Gilroy-Light.ttf'),
    'Gilroy-Medium': require('../../../packages/app/assets/fonts/Gilroy-Medium.ttf'),
    'Gilroy-SemiBold': require('../../../packages/app/assets/fonts/Gilroy-SemiBold.ttf'),
  })

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  const colorScheme = useColorScheme()

  return (
    <Provider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack />
        <NativeToast />
      </ThemeProvider>
    </Provider>
  )
}
