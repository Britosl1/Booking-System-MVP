import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slices/formSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      formReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
