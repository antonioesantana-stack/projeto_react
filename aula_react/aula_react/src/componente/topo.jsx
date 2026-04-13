import logoSenai from '../imagem/senai.png';
function Topo (){
    return(
        <header>
            <div className="topo">
                <img src={logoSenai} alt="Logo SENAI" style={{ height: '50px' }} />
            <h1>ALUNOS:DS</h1>

            </div>
        </header>
    );
}
export default Topo;
