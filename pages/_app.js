import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store, { persistor } from "@/Redux/store";
<<<<<<< HEAD
// import { PersistGate } from "redux-persist/integration/react";
=======
import { PersistGate } from "redux-persist/integration/react";
import Chat from "../components/chat"
>>>>>>> 3fef19750d8ed7f1a9af10aacf807725b8180a80
export default function App({ Component, pageProps }) {
  return (
    <>
    <Chat />
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
