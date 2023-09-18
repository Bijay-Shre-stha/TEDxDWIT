import './App.css';
// import Counter from './Components/Counter';
import Header from './Components/Header';
import Login from './Components/Login';
import Footer from './Components/Footer';

function App() {
  console.log("Developed By Bijay Shrestha (ZEROx0817), DWIT Software Club Member 2023");

  return (
    <div className="App">
      <Header />
      {/* <Counter /> */}
      <my-counter></my-counter>
      <Login />
      <Footer />
    </div>
  );
}

export default App;
