
import './styles.css'
import imgbackground from '../../img/home-backgroud.jpg.webp'

const Home = () => {

    return(
        <main className='container-home' style={{ backgroundImage:`url(${imgbackground})` }}>
            <div className='container-left'>
                <h1>O futuro é a razão que a gente faz planos.</h1>
                <p>Escolha o futuro. Comece a controlar melhor sua vida financeira com o Nubank.</p>
            </div>
            <div className='container-right'>
                <h1>Peça sua conta e cartão de crédito do Nubank</h1>
                <input placeholder='Digite o seu cpf'></input>
                <br></br>
                <button className='button-continuar'>Continuar</button>
            </div>
        
        </main>
    )
}

export default Home;