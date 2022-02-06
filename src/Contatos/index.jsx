import React from 'react';


function Contatos(){
    return(
        <div>
            <div class="container p-5 my-5 border bg-dark">
                <h1  className='text-white text-center'>Olá, esta é a nossa parte de contatos, aqui você poderá nos dar
                    um feedback do nosso trabalho , se cadastrar para novidades e promoções.</h1>
            </div>

            <section>
                <form>
                <h1 class="text-center text-white">Cadastre-se</h1>

                    <div class="container p-5 my-5 border bg-dark">

                    <div class="form-row">
                        <div class="form-group col-md-6 text-white">
                        <label for="inputNome">Nome</label>
                        <input type="text" class="form-control" id="inputNome" placeholder="Nome completo"/>
                        </div>
                        <div class="form-group col-md-6 text-white">
                        <label for="inputText">Email</label>
                        <input type="text" class="form-control" id="inputEmail" placeholder="insira seu e-mail"/>
                        </div>
                    </div>
                    <div class="form-group text-white">
                        <label for="inputAddress">Endereço</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="Rua dos Bobos, nº 0"/>
                    </div>
                    <div class="form-group text-white">
                        <label for="inputAddress2 ">Complemento</label>
                        <input type="text" class="form-control" id="inputComplemento" placeholder="Apartamento, hotel, casa, etc."/>
                    </div>
                    <div class="form-row text-white">
                        <div class="form-group col-md-6">
                        <label for="inputCity">Cidade</label>
                        <input type="text" class="form-control" id="inputCity"/>
                        </div>
                        <div class="form-group col-md-4 text-white">
                        <label for="inputEstado">Estado</label>
                        <select id="inputEstado" class="form-control">
                            <option selected>Escolher...</option>
                            <option>Rio de Janeiro</option>
                            <option>São Paulo</option>
                            <option>Minas Gerais</option>
                            <option>Bahia</option>
                        </select>
                        </div>
                        <div class="form-group col-md-2 text-white">
                        <label for="inputCEP">CEP</label>
                        <input type="text" class="form-control" id="inputCEP"/>
                        </div>
                    </div>
                    <div class="form-group text-white">
                        <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck"/>
                        <label class="form-check-label" for="gridCheck">
                            Aceito receber notificações por email
                        </label>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Cadastrar</button>

  </div>
</form>


<h1 class="text-center text-white"> Deixe-nos o seu Feedback !</h1>

        <div class="container">

            <div class="container p-5 my-5 border bg-dark">
                <h1  className='text-white text-center'>É sempre muito importante para nós o seu feedback, pois é
                    nele que iremos basear nossas mudanças e melhorias , abaixo está uma parte destinada para 
                    sugestões de melhorias, críticas , seu feedback em geral , agradecemos desde já. </h1>
            </div>

        </div>

        <div class="form-group">
            <div class="container">
            <form>
                <div class="form-group">
                    <label for="formGroupExampleInput" class="text-white">Nome</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Nome"/>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2" class="text-white">Email</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Email"/>
                </div>
                </form>
                <label for="exampleFormControlTextarea1 text-white"class="text-white">Seu Feedback</label>
                <textarea class="form-control rounded-0" id="exampleFormControlTextarea1" placeholder="Escreva aqui ..." rows="10"></textarea>
                <br/>
                <button type="button" class="btn  btn-primary  ">Enviar</button>
            </div>
        </div>


    </section>

        </div>
    );
}

export default Contatos;