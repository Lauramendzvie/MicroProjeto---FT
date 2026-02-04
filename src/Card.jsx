import { useState } from 'react';
import './Card.css';

import PrimeiraPulseira from './assets/img/PrimeiraPulseira.jpg';
import SegundaPulseira from './assets/img/SegundaPulseira.jpg';
import TerceiraPulseira from './assets/img/TerceiraPulseira.jpg';
import QuartaPulseira from './assets/img/QuartaPulseira.jpg';
import QuintaPulseira from './assets/img/QuintaPulseira.jpg';
import SextaPulseira from './assets/img/SextaPulseira.jpg';
import ColarEstrela from './assets/img/ColarEstrela.jpg';


function Card() {

  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (productName) => {
    if (favorites.includes(productName)) {
      setFavorites(favorites.filter(item => item !== productName));
    } else {
      setFavorites([...favorites, productName]);
    }
  };

  /* funçãozinha / filtro pra tornar algo favorito */

  return (
    <section className='cards-corpo'>

      {/* primeiro Card */}
      <div>
        <img src={PrimeiraPulseira} alt='Conjunto 3 Pulseiras Gold' className='ImagemProduto' /> 
        <h1 className='CardTitle'>Conjunto 3 Pulseiras Gold</h1>
        <p className='descrição-produto'> 
          Um conjuntinho de tres pulseiras delicadas e elegantes que vão funcionar bem em eventos que precisam de um toque de ouro
        </p> 
        <button id="Comprar">Comprar</button>
        <button id="Favoritar" onClick={() => toggleFavorite('Conjunto 3 Pulseiras Gold')}>
          {favorites.includes('Conjunto 3 Pulseiras Gold') ? ' Favorito' : ' Favoritar'}
        </button>
      </div>

      {/* segundo Card */}
      <div>
        <img src={SegundaPulseira} alt='Conjunto 3 Pulseiras Grossas' className='ImagemProduto' /> 
        <h1 className='CardTitle'>Conjunto 3 Pulseiras Grossas</h1>
        <p className='descrição-produto'> 
          Um conjunto de três pulseiras douradas grossas 
          que tornam o look mais atraente
        </p> 
        <button id="Comprar">Comprar</button>
        <button id="Favoritar" onClick={() => toggleFavorite('Conjunto 3 Pulseiras Grossas')}>
          {favorites.includes('Conjunto 3 Pulseiras Grossas') ? ' Favorito' : ' Favoritar'}
        </button>
      </div>

      {/* terceiro Card */}
      <div>
        <img src={TerceiraPulseira} alt='Conjunto 6 Pulseiras Gold' className='ImagemProduto' /> 
        <h1 className='CardTitle'>Conjunto 6 Pulseiras Gold</h1>
        <p className='descrição-produto'> 
          Um conjunto de 6 pulseiras douradas diversas e delicadas 
          com pingentes decorativos
        </p> 
        <button id="Comprar">Comprar</button>
        <button id="Favoritar" onClick={() => toggleFavorite('Conjunto 6 Pulseiras Gold')}>
          {favorites.includes('Conjunto 6 Pulseiras Gold') ? ' Favorito' : ' Favoritar'}
        </button>
      </div>

      {/* quarto Card */}
      <div>
        <img src={QuartaPulseira} alt='Conjunto 3 Pulseiras Finas' className='ImagemProduto' /> 
        <h1 className='CardTitle'>Conjunto 3 Pulseiras Finas</h1>
        <p className='descrição-produto'> 
          Um conjunto de três pulseiras douradas finas 
          que desempenham um ótimo papel como acessório delicado 
        </p> 
        <button id="Comprar">Comprar</button>
        <button id="Favoritar" onClick={() => toggleFavorite('Conjunto 3 Pulseiras Finas')}>
          {favorites.includes('Conjunto 3 Pulseiras Finas') ? ' Favorito' : ' Favoritar'}
        </button>
      </div>

      {/* quinto Card */}
      <div>
        <img src={QuintaPulseira} alt='Conjunto 5 Pulseiras Gold' className='ImagemProduto' /> 
        <h1 className='CardTitle'>Conjunto 5 Pulseiras Gold</h1>
        <p className='descrição-produto'> 
          Conjunto com 5 pulseiras douradas finas e delicadas
        </p> 
        <button id="Comprar">Comprar</button>
        <button id="Favoritar" onClick={() => toggleFavorite('Conjunto 5 Pulseiras Gold')}>
          {favorites.includes('Conjunto 5 Pulseiras Gold') ? ' Favorito' : ' Favoritar'}
        </button>
      </div>

      {/* sexto Card */}
      <div>
        <img src={SextaPulseira} alt='Conjunto 6 Pulseiras Gold' className='ImagemProduto' /> 
        <h1 className='CardTitle'>Conjunto 6 Pulseiras Gold</h1>
        <p className='descrição-produto'> 
          Um conjunto de 6 pulseiras delicadas e douradas para
          arrasar no look!
        </p> 
        <button id="Comprar">Comprar</button>
        <button id="Favoritar" onClick={() => toggleFavorite('Conjunto 6 Pulseiras Gold (2)')}>
          {favorites.includes('Conjunto 6 Pulseiras Gold (2)') ? ' Favorito' : ' Favoritar'}
        </button>
      </div>

      {/* sétimo card (colar de estrelinhas) */}
      <div>
        <img src={ColarEstrela} alt='Colar Estrelinhas' className='ImagemProduto' />
        <h1 className='CardTitle'>Colar com Estrelinhas Douradas</h1>
        <p className='descrição-produto'>
          Um colar delicado e fofo dourado de estrelinhas!
        </p>
        <button id="Comprar">Comprar</button>
        <button id="Favoritar" onClick={() => toggleFavorite('Colar com Estrelinhas Douradas')}>
          {favorites.includes('Colar com Estrelinhas Douradas') ? ' Favorito' : ' Favoritar'}
        </button>
      </div>

      {/* e aqui vem minha lista de favoritos (por favor que funcione jesus) */}
    <div className="lista-favoritos">
      <h2>Favoritos</h2>
      {favorites.length === 0 ? (
          <p> voce nao possui nenhum produto em seus favoritos :P </p>
        ) : (
          <ul>
            {favorites.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>

    </section>
  );
}

export default Card;
