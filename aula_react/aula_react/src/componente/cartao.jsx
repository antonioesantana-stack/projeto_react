import Perfil from "./perfil";
function Cartao(props){
    return(
    <div className="cartao">
        <Perfil foto={props.foto} nome={props.nome} />
        <h3>{props.nome}</h3>
        <p>idade: {props.idade}</p>
        <p>telefone: {props.telefone}</p>
        <p>email: {props.email}</p>

    </div>
);
}
export default Cartao;