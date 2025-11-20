import styled from "styled-components";

import imgSala from "./assets/sala.jpg"

import { FaRegCheckCircle } from "react-icons/fa";

const SecaoSobre = styled.section`
    display: grid;
    grid-template-columns: 45% 45%;
    justify-content: center;
    gap: 2.5rem;
    padding: 4rem 1rem;
`
const SecaoSobreEsquerda = styled.div`
    position: relative;

    div {
        background: linear-gradient(85deg, #00b386, #2db300);
        width: fit-content;
        padding: 2rem;
        color: #fff;
        border-radius: 20px;
        height: 150px;
        position: absolute;
        bottom: -20px;
        right: -20px;

        h1 {
            font-weight: bold;
        }

        p {
            margin-top: .5rem;
            width: 80%;
            font-weight: bold;
        }
    }
`

const SecaoSobreImagem = styled.img`
    width: 100%;
    border-radius: 15px;
`

const SecaoSobreTexto = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
        font-size: 3rem;
        font-family: "Roboto", sans-serif;
        font-weight: 900;
    }
`
const SecaoSobreTextoParagrafo = styled.div`
    color: #6e6e6eff;
    font-size: 1.4rem;
`
const SecaoSobreTextoCaracteristicas = styled.div`
    display: grid;
    gap: .8rem;
    margin-top: 1.3rem;

    p {
        font-size: 1.2rem;
        color: #1f1f1fff;
        display: flex;
        align-items: center;
        gap: .7rem;
    }
`

export default function Sobre() {
    return (
        <SecaoSobre>
            <SecaoSobreEsquerda>
                <SecaoSobreImagem src={imgSala} alt="" />
                <div>
                    <h1>15+</h1>
                    <p>Anos de Experiência</p>
                </div>
            </SecaoSobreEsquerda>

            <SecaoSobreTexto>
                <h1>Sobre Nossa Clínica</h1>
                <SecaoSobreTextoParagrafo>Somos uma clínica veterinária dedicada a proporcionar o melhor cuidado para seu pet. Nossa missão é garantir a saúde e felicidade dos animais através de atendimento de excelência.</SecaoSobreTextoParagrafo>
                <SecaoSobreTextoParagrafo>Com uma equipe altamente qualificada e instalações modernas, oferecemos desde consultas de rotina até procedimentos cirúrgicos complexos.</SecaoSobreTextoParagrafo>

                <SecaoSobreTextoCaracteristicas>
                    <p><FaRegCheckCircle className="sobre-icone" />Equipe de veterinários especializados</p>
                    <p><FaRegCheckCircle className="sobre-icone" />Equipamentos modernos e tecnologia de ponta</p>
                    <p><FaRegCheckCircle className="sobre-icone" />Atendimento humanizado e personalizado</p>
                    <p><FaRegCheckCircle className="sobre-icone" />Mais de 15 anos de experiência</p>
                </SecaoSobreTextoCaracteristicas>

            </SecaoSobreTexto>
        </SecaoSobre>
    )
}