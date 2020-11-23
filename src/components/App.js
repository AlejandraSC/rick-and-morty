import '../stylesheets/app.scss';
import Otro from './Otro';

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <h1 className="headerTitle">Componentes: Lista de Adalabers</h1>
      </header>
      <aside>
        <Otro />
      </aside>
    </div>
  );
};

export default App;
