import Perfil from "./perfil";

function CartaoLaboratorios(props) {
    return (
        <div className="cartao">
            <Perfil foto={props.foto} nome={props.nome} />
            <h3>{props.nome}</h3>
            <p>sala: {props.sala}</p>
            <p>localidade: {props.localidade}</p>
        </div>
    );
}

export default CartaoLaboratorios;