import Oculos01 from '/Users/Matheus/Desktop/Estudos/Programação/DevMedia/react/missao-front-end-loja-de-oculos/src/assets/oculos01.png'
import Oculos02 from '/Users/Matheus/Desktop/Estudos/Programação/DevMedia/react/missao-front-end-loja-de-oculos/src/assets/oculos02.png'
import Oculos03 from '/Users/Matheus/Desktop/Estudos/Programação/DevMedia/react/missao-front-end-loja-de-oculos/src/assets/oculos03.png'
import Oculos04 from '/Users/Matheus/Desktop/Estudos/Programação/DevMedia/react/missao-front-end-loja-de-oculos/src/assets/oculos04.png'

export default function sessaoProdutos(){
  return(
    <section className='limitar-secao'>
      <div id='produtos' >
        <h2>Nossos Produtos</h2>
        <p id='primeiro-paragrafo'>
          Trabalhamos com oculos de grau, óculos de Sol, lentes transition nos modelos masculino, feminino e infantil.
        </p>
        <p>
          Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.
        </p>
        <div id='fotos'>
          <div className='cards'>
            <h3>Óculos de grau</h3>
            <img src={Oculos01} alt="imagem do óculos de grau"/>
            <p>R$ 500,00</p>
          </div>
          <div className='cards'>
          <h3>Óculos transition</h3>
            <img src={Oculos02} alt="imagem do óculos de grau"/>
            <p>R$ 750,00</p>
          </div>
          <div className='cards'>
          <h3>Óculos de sol</h3>
            <img src={Oculos03} alt="imagem do óculos de grau"/>
            <p>R$ 700,00</p>
          </div>
          <div className='cards'>
          <h3>Óculos infantil</h3>
            <img src={Oculos04} alt="imagem do óculos de grau"/>
            <p>R$ 500,00</p>
          </div>

          <div className='paragrafo-lista'>
            <p>Todos os nosso produtos incluem:</p>
            <ul>
              <li>Garantia de 1 ano</li>
              <li>Manutenção preventiva</li>
              <li>Descontos especiais na compra da segunda unidade</li>
              <li>Flexibilidade de pagamento</li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}