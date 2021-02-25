import React from "react";
import { Provider } from "react-redux";
import { AppRouter } from "./routes/AppRouter";

import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="app__container">
        <AppRouter />
      </div>
    </Provider>
  );
}

export default App;
