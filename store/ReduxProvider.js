'use client';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from "@/store/store";
import Preloader from "@/components/Preloader";
import {useEffect} from "react";
import {getProducts} from "@/services/getProducts";
import {setProducts} from "@/store/slices/product-slice";
import {getCategoryWiseProducts} from "@/services/getCategoryWiseProducts";
// import { store, persistor } from './store'; // Adjust path as necessary

export default function ReduxProvider({children}) {

  // useEffect(() => {
  //   const getProductsList = async () => {
  //     try {
  //       const products = await getCategoryWiseProducts('all');
  //       store.dispatch(setProducts(products?.data?.categories || []));
  //     } catch (error) {
  //       console.error('Failed to fetch products:', error);
  //     }
  //   };
  //
  //   getProductsList();
  // }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={<Preloader/>} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}