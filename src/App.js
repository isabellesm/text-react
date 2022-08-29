
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='main'>
        <div className='center'>
        <div className='menu'>
          <div className='logo'>
            <h3>React text</h3>
          </div>
          <div className='itens-menu'>
            <a href='#'>login</a>
          </div>
        </div>
        <div className='form'>
          <form>
            <h2>Entre em contato!</h2>
            <div className='items-form'>
              <input placeholder="Nome..." type= "text"/>
              <input placeholder="Sobrenome..."  type= "text"/>
              <input placeholder="Número de telefone..."  type= "text"/>
              <input placeholder="Cidade..."  type= "text"/>
              <input type= "submit"/>

            </div>
          </form>
        </div>
      </div>
      </div>

      <dev className= "conteudo">
        <dev className= "center">
          <dev className= "conteudo-single">
            <h3>Titulo do React text</h3>
            <p>Aqui está o conteúdo de exemplo para o React text para o site... </p>
          </dev>
          <dev className= "conteudo-single">
            <h3>Titulo do React text</h3>
            <p>Aqui está o conteúdo de exemplo para o React text para o site... </p>
          </dev>
          <dev className= "conteudo-single">
            <h3>Titulo do React text</h3>
            <p>Aqui está o conteúdo de exemplo para o React text para o site... </p>
          </dev>
          <dev className= "conteudo-single">
            <h3>Titulo do React text</h3>
            <p>Aqui está o conteúdo de exemplo para o React text para o site... </p>
          </dev>
        </dev>
      </dev>
      
    </div>
  );
}

export default App;
