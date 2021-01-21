import { GlobalStyle } from './style.js';
import { IconStyle } from './static/iconfont/iconfont';
import Header from './common/header';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <IconStyle />
      <Header />
    </Provider>

  );
}

export default App;
