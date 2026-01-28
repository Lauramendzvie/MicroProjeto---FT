import './Card.css';
import PrimeiraPulseira from './PrimeiraPulseira.jpg';
import SegundaPulseira from './SegundaPulseira.jpg'
import TerceiraPulseira from './TerceiraPulseira.jpg'
import QuartaPulseira from './QuartaPulseira.jpg'
import QuintaPulseira from './QuintaPulseira.jpg'
import SextaPulseira from './SextaPulseira.jpg'
import ColarEstrela from './ColarEstrela.jpg'

function Card(){
    return(
        <section className='cards-corpo'>
          {/*primeiro Card*/}
        <div>
          <img src='{PrimeiraPulseira}' alt='Conjunto 3 Pulseiras Gold' className='ImagemProduto'/> 
          <h1 className=' CardTitle'> Conjunto 3 Pulseiras Gold </h1>
          <p className='descrição-produto'> 
            Um conjunto de três pulseiras douradas finas 
            que desempenham um ótimo papel como acessório delicado 
          </p> 
          <button id="Comprar"> Comprar </button>
          <button id = "Favoritar"> Favoritar </button>
        </div>

         {/*segundo Card*/}
        <div>
          <img src='{SegundaPulseira}' alt='Conjunto 3 Pulseiras Gold' className='ImagemProduto'/> 
          <h1 className=' CardTitle'> Conjunto 3 Pulseiras Gold </h1>
          <p className='descrição-produto'> 
            Um conjunto de três pulseiras douradas Grossas 
            que tornam o look mais atraente
          </p> 
          <button id="Comprar"> Comprar </button>
          <button id = "Favoritar"> Favoritar </button>
        </div>

         {/*terceiro Card*/}
        <div>
          <img src='{TerceiraPulseira}' alt='Conjunto 6 Pulseiras Gold' className='ImagemProduto'/> 
          <h1 className=' CardTitle'> Conjunto 6 Pulseiras Gold </h1>
          <p className='descrição-produto'> 
          Um conjunto de 6 pulseiras douradas diversas e delicadas 
          com pingentes decorativos
          </p> 
          <button id="Comprar"> Comprar </button>
          <button id = "Favoritar"> Favoritar </button>
        </div>

         {/*quarto Card*/}
        <div>
          <img src='{QuartaPulseira}' alt='Conjunto 3 Pulseiras Gold' className='ImagemProduto'/> 
          <h1 className=' CardTitle'> Conjunto 3 Pulseiras Gold </h1>
          <p className='descrição-produto'> 
            Um conjunto de três pulseiras douradas finas 
            que desempenhak um ótimo papel como acessório delicado 
          </p> 
          <button id="Comprar"> Comprar </button>
          <button id = "Favoritar"> Favoritar </button>
        </div>

         {/*quinto Card*/}
        <div>
          <img src='{QuintaPulseira}' alt='Conjunto 5 Pulseiras Gold' className='ImagemProduto'/> 
          <h1 className=' CardTitle'> Conjunto 5 Pulseiras Gold </h1>
          <p className='descrição-produto'> 
            Conjunto com 5 pulseiras douradas finas e delicadas
          </p> 
          <button id="Comprar"> Comprar </button>
          <button id = "Favoritar"> Favoritar </button>
        </div>

         {/*sexto Card*/}
        <div>
          <img src='{SextaPulseira}' alt='Conjunto 6 Pulseiras Gold' className='ImagemProduto'/> 
          <h1 className=' CardTitle'> Conjunto 6 Pulseiras Gold </h1>
          <p className='descrição-produto'> 
            Um conjunto de 6 pulseiras delicadas e douradas para
            arrasar no look!
          </p> 
          <button id="Comprar"> Comprar </button>
          <button id = "Favoritar"> Favoritar </button>
        </div>

      {/*sétimo card (colar de estrelinhas )*/}
      <div>
        <img src='{ColarEstrela}' alt='Colar Estrelinhas' className='ImagemProduto'/>
        <h1 className=' CardTitle'> Colar com Estrelinhas douradas </h1>
        <p className='descrição-produto'>
          Um colar delicado e fofo dourado de estrelinhas!
        </p>
        <button id="Comprar"> Comprar </button>
        <button id= "Favoritar"> Favoritar </button>
      </div>
        </section>
    ) 

  }

  export default Card