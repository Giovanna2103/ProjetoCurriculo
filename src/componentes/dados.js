import {FaPhone, FaEnvelope,FaHome} from 'react-icons/fa';
export default  function Dados() {
    return (
            <div className="informacoes">

                <div className="foto">           
                    <img src="img/gi2.jpg" alt="Rosto Gi"/>
                </div>

                <h1> Giovanna Araújo Garcia</h1>

                    <h5>Objetivo: Estagio em T.I</h5>

                <div className="divisao">
                    <p>INFORMAÇÕES</p>
                </div>

                <div className="pessoais">
                    <p> 20 anos   <br/>
                        Brasileira  <br/>
                        Solteira   
                    </p>

                    <p><FaHome/>  Avenida Cangaiba, 1153 - Cangaiba <br/>
                        São Paulo - SP <br/> 
                        CEP: 03711-003 
                    </p>       

                    <p><FaPhone/>  Telefones:  <br/>
                        (11) 93364-5335 <br/>
                        (11) 99900-6960
                    </p>

                    <p><FaEnvelope/>   giovanna.araujo2103@gmail.com  </p> 

                </div>
                <div className="curso">
                    <p>CURSOS</p>
                </div>

                    <div className="descricao">

                        <h3>   - Tecnologia da Informação e Comunicação  </h3>
                        <p>
                            SENAI <br/>
                            Conclusão: out/2018
                        </p>

                        
                        <h3> - Fundamentos da Tecnologia </h3>
                        <p>
                            Microsoft <br/>
                            Conclusão: Abril/2019
                        </p>

                        <h3> - Lógica de Programação </h3>
                        <p>
                            SENAI <br/>
                            Conclusão: Abril/2019
                        </p>


                    </div>
            </div>

    );
  }
  
