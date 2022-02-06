import React from 'react';
import './index.css';


function Home (){
    return(
        <div class="container">

    <div class="container p-5 my-5 border bg-dark">
        <h1  className='text-white text-center'>Bem Vindos ao <a class="text-primary"> DreamTour</a> </h1>
    </div>

    <div class="jumbotron">
        <div class="text-center">
            <h1 class="display-3">Bem Vindos ao <a class="text-primary"> DreamTour</a> esperamos dar a melhor
            experiência para sua viagem</h1>
        </div>
        <br/>
        <p class="lead text-dark">A vida é feita de momentos e valorizamos muito esses momentos com você, por isso não perca tempo e venha já conhecer nossas praias e vilarejos. Levamos aos nossos clientes todo conforto e tranquilidade que você merece.</p>
        
        <div>
        <img class="img rounded mx-auto d-block" src="/img/praia2.jpg" />
        </div>
        <br /><br /><br />

        <div>
            <p class="text-danger text-xl-center"><b>Ganhe 50% de desconto na sua primeira reserva conosco! Promoção de tempo limitado</b></p>
        </div>
        <br /><br />

              <button type="button" class="btn btn-lg btn-primary btn-lg btn-block">Faça sua reserva já!</button>
    </div>


    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100 mh-100" src="/img/trindadetobago.jpg" alt="Primeiro Slide"/>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100 mh-100" src="/img/amazonas.jpg" alt="Segundo Slide"/>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100 mh-100" src="/img/costarica.jpg" alt="Terceiro Slide"/>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Anterior</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Próximo</span>
        </a>
    </div>
</div> 
    );
}

export default Home;