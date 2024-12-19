import { Provider } from 'react-redux';

import MainNavigator from '@config/MainNavigator';
import store from '@store';

function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

export default App;
