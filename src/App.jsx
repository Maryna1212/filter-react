import { GlobalStyle } from './GlobalStyle';
import { Filter } from './components/Filter/Filter';

export default function App() {
  return (
    <div style={{ display: 'flex' }}>
      <GlobalStyle />
      <Filter
        isOpen
        searchable
        options={[
          { value: 'xs', label: 'Очень маленький' },
          { value: 'sm', label: 'Маленький' },
          { value: 'md', label: 'Средний' },
          { value: 'lg', label: 'Большой' },
          { value: 'xl', label: 'Очень большой' },
        ]}
      />
    </div>
  );
}

// ======================================================
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (

//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
