import styled from "styled-components";

import { TbVaccine } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaScissors } from "react-icons/fa6";
import { MdOutlinePeopleAlt } from "react-icons/md";


const SecaoServicos = styled.section`
    padding: 4rem 0; 

    h1 {
        font-size: 3.6rem;
        text-align: center;
        font-family: "Roboto", sans-serif;
        font-weight: 900;
    }
`
const SecaoServicosContainer = styled.div`
    display: grid;
    grid-template-columns: 30% 30% 30%;
    grid-template-rows: 150px 150px
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;

    div {
        padding: 1.5rem;
        border: 2px solid #cccbcbff;
        border-radius: 10px;
        display: grid;
        gap: 1rem;

        &:hover {
            border: 2px solid #00b386;
        }

        h2 {
            font-size: 1.7rem;
            color: #2b2b2bff;
        }

        p {
            font-size: 1.2rem;
            color: #6e6e6eff;
        }
    }
`
const SecaoServicosParagrafoSuperior = styled.p`
    font-size: 1.3rem;
    color: #6e6e6eff;
    text-align: center;
    margin: 1.7rem auto 3rem;
    width: 50%;
`
export default function Servicos () {
    return(
        <SecaoServicos>
            <h1>Nossos Serviços</h1>
            <SecaoServicosParagrafoSuperior>Oferecemos uma gama completa de serviços veterinários para cuidar da saúde e bem-estar do seu pet</SecaoServicosParagrafoSuperior>
            <SecaoServicosContainer>
                <div className="SecaoServicosCaixa">
                    <FaUserDoctor className="SecaoServicosIcone"/>
                    <h2>Consultas Veterinárias</h2>
                    <p>Atendimento completo com veterinários especializados para diagnóstico e tratamento.</p>
                </div>
                <div className="SecaoServicosCaixa">
                    <TbVaccine className="SecaoServicosIcone"/>
                    <h2>Vacinas e Vermífugos</h2>
                    <p>Mantenha seu pet protegido com nosso programa completo de vacinação e controle de parasitas.</p>
                </div>
                <div className="SecaoServicosCaixa">
                    <FaRegHeart className="SecaoServicosIcone"/>
                    <h2>Cirurgias</h2>
                    <p>Centro cirúrgico equipado para procedimentos de baixa e alta complexidade.</p>
                </div>
                <div className="SecaoServicosCaixa">
                    <FaRegClock className="SecaoServicosIcone"/>
                    <h2>Emergência 24h</h2>
                    <p>Atendimento emergencial disponível 24 horas por dia, 7 dias por semana.</p>
                </div>
                <div className="SecaoServicosCaixa">
                    <FaScissors className="SecaoServicosIcone" />
                    <h2>Banho e Tosa</h2>
                    <p>Serviços de estética e higiene com produtos de qualidade e profissionais capacitados.</p>
                </div>
                <div className="SecaoServicosCaixa">
                    <MdOutlinePeopleAlt className="SecaoServicosIcone"/>
                    <h2>Internação</h2>
                    <p>Estrutura completa para internação com monitoramento constante.</p>
                </div>
                
            </SecaoServicosContainer>
        </SecaoServicos>
    )
}