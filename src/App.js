import './App.css';
import Content from './feature/content/content';
import Navbar from './feature/navbar/navbar';
import Sidebar from './feature/sidebar/sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Navbar/>
      <Content/>
    </div>
  );
}

export default App;
