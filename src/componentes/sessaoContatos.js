import Local from '/Users/Matheus/Desktop/Estudos/Programação/DevMedia/react/missao-front-end-loja-de-oculos/src/assets/local.png'
import Telefone from '/Users/Matheus/Desktop/Estudos/Programação/DevMedia/react/missao-front-end-loja-de-oculos/src/assets/telefone.png'
import Email from '/Users/Matheus/Desktop/Estudos/Programação/DevMedia/react/missao-front-end-loja-de-oculos/src/assets/email.png'
import Facebook from '/Users/Matheus/Desktop/Estudos/Programação/DevMedia/react/missao-front-end-loja-de-oculos/src/assets/fb.png'
import Instagram from '/Users/Matheus/Desktop/Estudos/Programação/DevMedia/react/missao-front-end-loja-de-oculos/src/assets/ig.png'
import Twitter from '/Users/Matheus/Desktop/Estudos/Programação/DevMedia/react/missao-front-end-loja-de-oculos/src/assets/tt.png'
export default function sessaoContatos(){
  return(
    <nav>
      <div id='contato' className='limitar-secao'>
        <div id='titulo-e-paragrafo'>
          <h2>FALE CONOSCO</h2>
          <p>
            Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou central de atendimento.
          </p>
        </div>
        <div id='alinhamento'>
          <div className='id-redes-sociais'>
            <h3>Contato</h3>
            <div>
              <img src={Local} alt="imagem de local"/><span>Nova Iguaçu,RJ</span>
            </div>
            <div>
              <img src={Telefone} alt="numero de telefone"/><span>(21) 9999-9999</span>
            </div>
            <div>
              <img src={Email} alt="Email"/><span>contato@oticavida.com</span>
            </div>
          </div>
          <div className='id-redes-sociais'>
            <h3>Nossas Redes Sociais</h3>
            <div>
            <img src={Facebook} alt="facebook"/> <span>/OticaVida</span>
            </div>
            <div>
            <img src={Instagram} alt="instagram"/> <span>@oticavidarj</span>
            </div>
            <div>
            <img src={Twitter} alt="twitter"/> <span>@oticavidarj</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}