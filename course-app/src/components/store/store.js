import { configureStore } from "@reduxjs/toolkit";
import { courseReducer } from './course/course.reducer'

export const store =configureStore({
    reducer: {
        courseReducer,
    },
})



// import { compose, createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
// // import { rootReducer } from "./root-reducer";
// import { persistReducer,persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { loggerMiddleware } from "./middleware/logger";
// import thunk from "redux-thunk";

// const persistConfig={
//     key:'root',
//     storage,
//     blacklist:['userReduser']
// }
// const persistedReducer = persistReducer(persistConfig, )  //rootReducer
// const middlewares=[process.env.NODE_ENV !== 'production' && logger].filter(Boolean)

// const composeEnhancer=(process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
//  || compose

// const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares))

// export const store= createStore(persistedReducer,undefined,composedEnhancers)
// export const persistor = persistStore(store)

