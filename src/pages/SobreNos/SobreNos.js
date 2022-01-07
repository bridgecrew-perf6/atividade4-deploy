
import './styles.css'
import imgHeader from '../../img/sobre-nos-header.jpg.webp'

const SobreNos = () => {

    return(
        <main className='container-sobre'>
            <div><img src ={imgHeader} /></div>
            
            <div className='container-futuro'>
                <h1>Construindo o futuro</h1>
                <p>Imagine um mundo diferente, onde o que importa são os seus valores, e não o valor na sua conta. O Nubank surgiu para construir este mundo com você, simplificando a sua vida financeira com transparência e segurança.</p>
                <br></br>
                <p>Desde o dia 1, tratamos as pessoas como seres humanos e não como números.</p>
                <br></br>
                <p>Desconstruímos complexidade, burocracias e aquele jeito antigo de lidar com dinheiro.</p>
                <br></br>
                <p>Bem-vindos ao Nubank.</p>
           
            </div>
            
        
        </main>
    )
}

export default SobreNos;