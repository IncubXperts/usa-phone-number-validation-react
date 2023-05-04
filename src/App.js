import './App.css';
import GlobalPhoneNumber from './component/GlobalPhoneNumber';
import USAPhoneNumber from './component/USAPhoneNumber';

function App() {
  return (
    <div className='container'>
      <USAPhoneNumber />
      <GlobalPhoneNumber />
    </div>
  );
}

export default App;
