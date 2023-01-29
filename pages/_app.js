import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store, { persistor } from "@/Redux/store";
// import { PersistGate } from "redux-persist/integration/react";
export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Chat /> */}
      <ChakraProvider>
        <Provider store={store}>
          {/* <PersistGate persistor={persistor}> */}
          <Component {...pageProps} />
          {/* </PersistGate> */}
        </Provider>
      </ChakraProvider>
    </>
  );
}
