import logo from './logo.svg';
import './App.css';
import Student from './components/student.jsx';
import Student1 from './components/student1.jsx';
import Product from './components/product.jsx';     

function App() {
    return (
        <div className="App">
            <Student name="A" />
            <Student name="B" />
            <Student name="C" />

            <Student1 name="D" age={25} />
            <h3>Product Details</h3>
            <div style={{ display: 'flex', padding: '20px' }}>
                <Product name="Laptop" price={50000} description="A high-performance laptop" />
            </div>
        </div>
    );
}   

export default App;
