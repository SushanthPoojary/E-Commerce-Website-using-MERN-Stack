import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import {store, persistor} from "./features/store";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import { PersistGate } from 'redux-persist/integration/react';

const stripePromise = loadStripe(process.env.React_App_STRIPE_PUB_KEY);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

