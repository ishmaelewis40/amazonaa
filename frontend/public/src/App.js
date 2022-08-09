import data from './data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/">amazonaa</a>
      </header>
      <main><h1>Featured Products</h1>
      {
        DataTransfer.products.map(products => (<div>
          <img src={products.image} alt={products.name}/>
          <p>
            {products.name}

          </p>
          <p>
            {products.price}

          </p>
        </div>))
      }
      </main>
    </div>
  );
}

export default App;
