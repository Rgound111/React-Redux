
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import changeTheNumber from './reducers/upDown';
import { incNumber } from './actions';
import { decNumber } from './actions';

function App() {
  const mystore = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
  <>
  <div className="container">

    <h1>Increment/Decrement Counter</h1>
    <h3>Using React and Redux</h3>

    <div className="quantity">
      <a  className="quantity_minus" title='Decrement' onClick={()=> dispatch(decNumber())} > <span> - </span></a>
      <input name='quantity' type="text"  className='quantity'  value={mystore}/>
      <a  className="quantity_plus" title='Increment'  onClick={()=> dispatch(incNumber())}> <span> + </span></a>
    </div>

  </div>
  
  </>
  );
}

export default App;
