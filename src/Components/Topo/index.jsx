import styled from "styled-components";

import imgTopo from "./assets/fundo-topo.jpg"

import { CiCalendar } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";


const SecaoTopo = styled.section`
    display: grid;
    align-items: center;
    height: 85vh;
    background-image: url(${imgTopo});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
`
const SecaoTopoFundo = styled.div`
    background-color: #ffffffaf;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding: 0 2rem;

    h1 {
        text-align: start;
        font-size: 5.5rem;
        width: 50%;
        font-family: "Roboto", sans-serif;
        font-weight: 900;
        line-height: 1;

        span {
            font-size: 5.5rem;
            font-weight: bold;
            background: linear-gradient(85deg, #00b386, #2db300);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    p {
        width: 50%;
        font-size: 1.4rem;
        margin: 1rem 0;
        color: #585858ff;
        font-weight: 400;
    }     

    div {
        display: flex;
    }
`
const SecaoTopoFundoBotaoUm = styled.a`
    background: linear-gradient(85deg, #00b386, #2db300);
    margin-right: 1rem;
    padding: .8rem 2rem;
    color: #fff; 
    text-decoration: none;
    font-size: 1.2rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: .7rem;

    &:hover {
        background: linear-gradient(85deg, #25ac8aff, #5cad41ff);
    }
`
const SecaoTopoFundoBotaoDois = styled.a`
    padding: .8rem 2rem;
    text-decoration: none;
    color: #000;
    display: flex;
    align-items: center;
    gap: .7rem;
    background-color: #fff;
    border: 1px solid #b1afafff;
    border-radius: 10px;

    &:hover {
        background: linear-gradient(85deg, #25ac8aff, #5cad41ff);
        color: #fff;
    }
`

export default function Topo() {
    return (
        <SecaoTopo>
            <SecaoTopoFundo>
                <h1>Cuidado e Amor para seu <span>Melhor Amigo</span></h1>
                <p>Clínica veterinária moderna com equipe especializada e equipamentos de última geração. Porque seu pet merece o melhor cuidado.</p>
                <div>    
                    <SecaoTopoFundoBotaoUm href="" className="btn-agendar"><CiCalendar className="iconeBtnUm"/>Agendar Consulta</SecaoTopoFundoBotaoUm>
                    <SecaoTopoFundoBotaoDois href=""><FiPhone />(11) 99999-9999</SecaoTopoFundoBotaoDois>
                </div>

            </SecaoTopoFundo>
        </SecaoTopo>
    )
}