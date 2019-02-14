import { createStore } from 'redux';
import App from './App';
import myApp from './reducers';
let store = createStore(myApp);


function render() {
  ReactDOM.render(
 //   [...]

  );
}
store.subscribe(render);
render();
