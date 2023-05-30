//criando a função que ira mostrar o texto

import Texto from './componentes/texto'
function Texto(props) {
    return (
        <div>
            <Texto />
            <h1>Olá, react!</h1>
            <p>Gostei do React!</p>
            <Texto />
            <Texto />
        </div>
    )
}

export default App