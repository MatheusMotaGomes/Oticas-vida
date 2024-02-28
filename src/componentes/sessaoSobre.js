import Loja from '/Users/Matheus/Desktop/Estudos/Programação/DevMedia/react/missao-front-end-loja-de-oculos/src/assets/loja.png'
import Atendimento from '/Users/Matheus/Desktop/Estudos/Programação/DevMedia/react/missao-front-end-loja-de-oculos/src/assets/atendimento.png'
export default function sessaoSobre(){
 
  return(
    <sobre>
      <div id='sobre' className='limitar-secao'>
        <div id='subtitulo-e-paragrafo'>
          <h2>QUEM SOMOS NÓS ?</h2>
          <p>
            Fundado em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticass vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.
          </p>
        </div>
        <div className='cards-2'>
              
              <div className='paragrafo'>
                <img src={Loja} alt="foto da loja"/>
              </div>
              <div className='paragrafo'>
                <h3>NOSSAS FILIAIS</h3>
                <p>
                  Hoje temos mais de 20 filiais pelo Brasil e na América
                </p>
              </div>
              
            <div className='paragrafo'>
              <h3>ATENDIMENTO FLEXÍVEL</h3>
              <p>
                Nossa equipe possui profissionais treinados para te atender
              </p>  
            </div>
            <div className='paragrafo'>
              <img src={Atendimento} alt="foto do atendimento"/>
            </div>
            
        </div>  
      </div>
    </sobre>
  );
}