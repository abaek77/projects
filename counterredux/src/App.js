import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './count/index';
import './App.css';

function App() {
 
  const count = useSelector((state) => state.count);
  const dispatch  = useDispatch();
  const {Increment, Decrement} = bindActionCreators(actionCreators, dispatch)

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => Increment(1)}>Increment</button>
      <button onClick={() => Decrement(1)}>Decrement</button>
    </div>
  );
}

export default App;
