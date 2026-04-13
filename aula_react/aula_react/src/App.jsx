import { useState } from 'react';
import './css/App.css'
import Cartao from './componente/cartao.jsx';
import Topo from './componente/topo.jsx';
import Rodape from './componente/rodape.jsx';
import CartaoLaboratorios from './componente/cartao_laboratorios.jsx';
import CartaoProfessores from './componente/cartao_professores.jsx';
import Alunos from './componente/dados_aluno.jsx';
import Professores from './componente/dados_professores.jsx';
import Laboratorios from './componente/dados_laboratorio.jsx';
import Capa from './componente/capa.jsx';
import Slideshow from './componente/slideshow.jsx';
function App() {
  const [secao, setSecao] = useState("Inicio");
  
  return (
    <>
      <Topo/>
      
      {secao !== "Inicio" && (
        <div className='menu'>
          <button onClick={() => setSecao("Inicio")}>Voltar ao Início</button>
        </div>
      )}
      
      <div className='container-cartoes'>
        
        {secao === "Inicio" && (
          <div className='pagina-inicial'>
            
            
            <h2>Selecione uma categoria:</h2>
            <div className='botoes-menu-principal'>
              <button onClick={() => setSecao("Alunos")}>Alunos</button>
              <button onClick={() => setSecao("Professores")}>Professores</button>
              <button onClick={() => setSecao("Laboratorios")}>Laboratórios</button>
              <button onClick={() => setSecao("Contato")}>Contato</button>
            </div>
                        <Slideshow />

          </div>
        )}

        {secao === "Alunos" && Alunos.map((aluno, index) => (
          <Cartao
            key={index}
            foto={aluno.foto}
            nome={aluno.nome}
            idade={aluno.idade}
            email={aluno.email}
            telefone={aluno.telefone}
          />
        ))}

        {secao === "Professores" && Professores.map((professor, index) => (
          <CartaoProfessores
            key={index}
            foto={professor.foto}
            nome={professor.nome}
            idade={professor.idade}
            area={professor.area}
            telefone={professor.telefone}
            email={professor.email}
          />
        ))}

        {secao === "Laboratorios" && Laboratorios.map((laboratorio, index) => (
          <CartaoLaboratorios
            key={index}
            foto={laboratorio.foto1}
            nome={laboratorio.nome}
            sala={laboratorio.sala}
            localidade={laboratorio.localidade}
          />
        ))}

        {secao === "Contato" && (
          <div className='pagina-contato'>
            <h2>Entre em Contato</h2>
            <form className="formulario-contato">
              <div className="grupo-input">
                <label>Nome: </label>
                <input type="text" placeholder="Digite seu nome completo" required />
              </div>
              <div className="grupo-input">
                <label>Email: </label>
                <input type="email" placeholder="Seu melhor e-mail" required />
              </div>
              <div className="grupo-input">
                <label>Mensagem: </label>
                <textarea placeholder="Como podemos ajudar?" rows="5" required></textarea>
              </div>
              <button type="button" className="btn-enviar">Enviar Mensagem</button>
            </form>
          </div>
        )}

      </div>
      
      <Rodape/>
    </>
  );
}

export default App;
