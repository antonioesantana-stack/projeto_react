import logoSenai from '../imagem/se.png';

function Capa (){
    return(
        <header>
            <div className="capa">
                <img src={logoSenai} alt="capa"  />
            </div>
        </header>
    );
}

export default Capa;