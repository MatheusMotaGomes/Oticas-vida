import Logo from '../assets/logo.png'

export default function Topo(){
  return(
    <header>
      <div className='limitar-secao'>
      
        <div>
          <img src={Logo} alt="logo"/>
        </div>

        <div id='div-2'>
          <a href='#produtos'>PRODUTOS</a>
          <a href='#sobre'>SOBRE</a>
          <a href='#contato'>CONTATO</a>
        </div> 

      </div>
    </header>
  );
}