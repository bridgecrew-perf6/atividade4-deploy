
import './styles.css'
import imgbackground from '../../img/conta-pj-background.jpg.webp'

const ContaPJ = () => {

    return(
        <main className='container-main'>
            <div className='container-home' style={{ backgroundImage:`url(${imgbackground})` }}>
                <div className='container-left'>
                    <h1>Conta PJ</h1>
                    <p>Foque no que realmente importa: seu negócio. </p>
                </div>
                <div className='container-right'>
                    <h1>É cliente do Nubank? Peça já sua conta PJ</h1>
                    <input placeholder='Digite o seu cpf'></input>
                    <br></br>
                    <button className='button-continuar'>Pedir conta PJ</button>
                </div>
            </div>
            <div className='container-cobranca'>
                <h1>Um jeito rápido de enviar cobranças e acompanhar pagamentos</h1>
                <video width="420" height="340"  controls autoplay muted
                >
                    <source src="https://nubank.com.br/videos/pj/pj-boleto-charging.webm" type="video/webm"></source>
                    </video>

                <p>Conheça a nova Área de Cobranças: uma ferramenta para empreendedores que permite gerenciar cobranças pelo app</p>   

            </div>
        
        </main>
    )
}

export default ContaPJ;