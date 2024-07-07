import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./(redux)/store";

import { SafeAreaView } from "react-native-safe-area-context";
import { Slot } from "expo-router";

import Header from "../components/Header";
import Toast, { BaseToast } from "react-native-toast-message";

// SplashScreen.preventAutoHideAsync();

export default function Layout() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView>
          <Header />
          <Slot />
          <Toast topOffset={150} config={toastConfig} visibilityTime={1000} />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "#4BB543" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: "400",
      }}
    />
  ),
};
