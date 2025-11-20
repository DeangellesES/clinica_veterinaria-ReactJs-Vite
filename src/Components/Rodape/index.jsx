import styled from "styled-components";

import { FaHeart, FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";

const SecaoRodape = styled.footer`
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    background: linear-gradient(85deg, #00b386, #2db300);
    color: #fff;
    align-items: center;

    h3 {
        display: flex;
        align-items: center;
        gap: .6rem;
        font-size: 1.3rem;
    }

    div {
        text-align: center;
        font-size: 1.3rem;

        p {
            margin-bottom: .5rem;
        }

        div {
            display: flex;
            gap: .6rem;
            justify-content: center;
            font-size: 1.5rem;
        }
    }
`
const SecaoRodapeTextoDireita = styled.p`
    font-size: 1.2rem;
`

export default function Rodape() {
    return (
        <SecaoRodape>
            <h3><FaHeart />Clínica Veterinária</h3>
            <div>
                <p>© 2025 Clínica Veterinária. Todos os direitos reservados.</p>
                <div>
                    <FaInstagram className="rodape-icone"/>
                    <LuFacebook className="rodape-icone"/>
                    <FiLinkedin className="rodape-icone"/>
                </div>

            </div>

            <SecaoRodapeTextoDireita>Feito com amor para seu pet</SecaoRodapeTextoDireita>
        </SecaoRodape>
    )
}