import {  FaLaptop, FaUserGraduate, FaGraduationCap, FaBook} from "react-icons/fa";
export default  function Curriculo() {
    return (
        <div> 

            <h2> <FaBook/> Resumo das Qualificações   </h2>

            <div className="qualificacoes">

                <p> Administrativa: Habilidade para atuar no auxilio em rotinas do setor, <br/>
                    contato com clientes e fornecedores, organização do ambiente de trabalho e <br/>
                    nas atividades diárias da empresa.
                </p>
                <p>
                    Disposição para atuar na organização de documentos e rotinas, <br/>
                    planejamento colaborando com o controle de atividades.
                </p>


            </div>

            <div className="curriculo">

                <h2> <FaUserGraduate/> Formação Acadêmica  </h2>

                <h4>  <FaLaptop/> Curso Técnico T.I.</h4>       
                <p>SENAC <br/>
                   Conclusão: Maio/2021
                </p>

                <h4> <FaGraduationCap/> Ensino Médio</h4>       

                <p> Escola Estadual Professor Gabriel Ortiz <br/>
                    Conclusão: Dezembro/2018
                </p>
            </div>


            <div className="habilidade">

            <h2> <FaLaptop/> Habilidades  </h2>

            <p>
            Conhecimento em pacote Office e Internet <br/>
            Limpeza completa, Manutenção, Revisão de computadores <br/>
            Instalação e Formatação de Windows 7, 8, 10 <br/>
            Instalação e Formatação de Linux <br/>
            Administração de Windows Server <br/>
            Photoshop Básico <br/>

            </p>


            </div>
        </div>




    );
  }
  
