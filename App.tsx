import { Provider } from 'react-redux';
import { QueryClientProvider } from '@tanstack/react-query';

import MainNavigator from '@config/MainNavigator';
import store from '@store';
import queryClient from '@network/queryClient';

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <MainNavigator />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
