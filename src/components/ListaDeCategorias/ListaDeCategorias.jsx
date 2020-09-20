import React, {Component} from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {
    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias.bind(this));
    }

    _novasCategorias(categorias){

    }

    _handleEventoInput(e) {
        if (e.key === "Enter") {
            let valorCategoria = e.target.value.toUpperCase();
            this.props.adicionarCategoria(valorCategoria);
        }
    }

    render() {
        return (
            <section className="lista-categorias">
                <div>
                    <ul className="lista-categorias_lista">
                        {this.props.categorias.map((categoria, index) => {
                            return <li key={index} className="lista-categorias_item">
                                {categoria}
                            </li>
                        })}
                    </ul>
                    <input type="text" id="adiciona_categoria"
                           className="lista-categorias_input" placeholder="Adicionar categoria"
                           onKeyUp={this._handleEventoInput.bind(this)}/>
                </div>
            </section>
        );
    }
}

export default ListaDeCategorias;