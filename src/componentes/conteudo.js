import SessaoCapa from './sessaoCapa.js'
import SessaoProdutos from './sessaoProdutos.js'
import SessaoSobre from './sessaoSobre.js'
import SessaoContatos from './sessaoContatos.js'
import Rodape from './rodape.js'

export default function conteudo(){
  return(
    <main>
      <SessaoCapa/>
      <SessaoProdutos/>
      <SessaoSobre/>
      <SessaoContatos/>
      <Rodape/>
    </main>
  );
}