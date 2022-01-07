
import './styles.css'
import imgbackground from '../../img/conta-background.jpg.webp'

const Conta = () => {

    return(
        <main className='container-home' style={{ backgroundImage:`url(${imgbackground})` }}>
            <div className='container-left'>
                <h1>Conta do Nubank</h1>
                <p>Você no controle: receba, movimente e guarde seu dinheiro de um jeito simples.</p>
            </div>
            <div className='container-right'>
                <h1>Com o Nubank a resposta vem em menos de 1 minuto</h1>
                <input placeholder='Digite o seu cpf'></input>
                <br></br>
                <button className='button-continuar'>Continuar</button>
            </div>
        
        </main>
    )
}

export default Conta;