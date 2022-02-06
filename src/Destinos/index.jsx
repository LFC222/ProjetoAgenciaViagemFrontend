import React from 'react';


function Destinos(){
    return(
<div class="container">

    <div class="container p-5 my-5 border bg-dark">
        <h1  className='text-white text-center'>Os melhores destinos que combinam com  suas férias estão aqui! </h1>
    </div>

    <div class="card-deck">
  <div class="card">
    <img class="card-img-top" src="/img/img1.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Caribe</h5>
      <p class="card-text">10 dias de hospedagens na ilha do Caribe em pousada ou hotel por um otimo preço , quatro quartos , piscina, café da manhã e tour pela ilha incluso! .</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item text-success text-center"><b>Price : $3000,00 por pessoa</b></li>
    </ul>
    <div class="card-footer">
    <button type="button" class="btn btn-lg btn-primary btn-block">Reservar</button>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="/img/img2.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Indonésia</h5>
      <p class="card-text">10 dias de hospedagens na capital da Indonesia em pousada ou hotel por um otimo preço , quatro quartos , piscina e café da manhã !</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item text-success text-center"><b>Price : $6000,00 por pessoa</b></li>
    </ul>
    <div class="card-footer">
    <button type="button" class="btn btn-lg btn-primary btn-block">Reservar</button>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="./img/img3.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Japão</h5>
      <p class="card-text">10 dias de hospedagens na ilha do Japão em pousada ou hotel por um otimo preço , quatro quartos , piscina, café da manhã e tour pela ilha incluso!</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item text-success text-center"><b>Price : $7000,00 por pessoa</b></li>
    </ul>
    <div class="card-footer">
    <button type="button" class="btn btn-lg btn-primary btn-block">Reservar</button>
    </div>
  </div>
</div>
<br/>

<div class="card-deck">
  <div class="card">
    <img class="card-img-top" src="/img/img4.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">China</h5>
      <p class="card-text">10 dias de hospedagens na China em pousada ou hotel por um otimo preço , quatro quartos , piscina, café da manhã e tour pela capital incluso!</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item text-success text-center"><b>Price : $7000,00 por pessoa</b></li>
    </ul>
    <div class="card-footer">
    <button type="button" class="btn btn-lg btn-primary btn-block">Reservar</button>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="/img/img5.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Finlândia</h5>
      <p class="card-text">10 dias de hospedagens na ilha da Finlândia em pousada ou hotel por um otimo preço , quatro quartos , piscina, café da manhã e tour pela ilha incluso!</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item text-success text-center"><b>Price : $9000,00 por pessoa</b></li>
    </ul>
    <div class="card-footer">
    <button type="button" class="btn btn-lg btn-primary btn-block">Reservar</button>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="./img/img6.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Bahamas</h5>
      <p class="card-text">10 dias de hospedagens na ilha das Bahamas em pousada ou hotel por um otimo preço , quatro quartos , piscina, café da manhã e tour pela ilha incluso!</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item text-success text-center"><b>Price : $1500,00 por pessoa</b></li>
    </ul>
    <div class="card-footer">
    <button type="button" class="btn btn-lg btn-primary btn-block">Reservar</button>
    </div>
  </div>
</div>
<br/>

</div>
    );
}

export default Destinos;