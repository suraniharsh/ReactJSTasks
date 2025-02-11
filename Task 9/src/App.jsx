import './App.css'
import Person from './Components/Person';
import Product from './Components/Product';

function App() {

  return (
    <div>
      <Person name="John Doe" age="30" />
      <Product name="Laptop" price="$999" />
    </div>
  );
}

export default App
