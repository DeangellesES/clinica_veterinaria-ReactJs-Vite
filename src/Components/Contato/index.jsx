import styled from "styled-components";

import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail, MdAccessTime} from "react-icons/md";

const SecaoContato = styled.section`
    padding: 5rem 0 3rem 0;

    h1 {
        text-align: center;
        font-size: 3rem;
        font-family: "Roboto", sans-serif;
        font-weight: 900;
    }
`
const SecaoContatoParagrafo = styled.p`
    text-align: center;
    font-size: 1.2rem;
    width: 44%;
    margin: 0 auto;
    color: #6e6e6eff;
    font-weight: bold;
    margin: 1rem auto 3rem;
`
const SecaoContatoContainer = styled.div`
    display: grid;
    grid-template-columns: 40% 40%;
    gap: 2rem;
    justify-content: center;
`
const SecaoContatoEsquerdo = styled.div`
    display: grid;
    gap: 1rem;

    div {
        padding: 1.6rem;
        border: 2px solid #ccccccff;
        border-radius: 15px;

        &:hover {
            border: 2px solid #00b386;
        }

        h2 {
            display: flex;
            align-items: center;
            gap: .6rem;
            color: #1b1b1bff;
        }

        p {
            font-size: 1.2rem;
            color: #727171ff;
            margin-top: .8rem;
        }
    }
`
const SecaoContatoDireita = styled.div`
    border: 2px solid #ccccccff;
    padding: 1.5rem;
    border-radius: 20px;

    h2 {
        margin-bottom: 2rem;
        color: #242323ff;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        input {
            padding: .7rem 1rem; 
            border-radius: 10px;
            border: 1px solid #c9c9c9ff;
            outline: none;
        }
        
        textarea {
            padding: .7rem 0 5rem 1rem;
            border: 1px solid #c9c9c9ff;
            border-radius: 10px;
        }

        a {
            text-decoration: none;
            background: linear-gradient(85deg, #00b386, #2db300);
            text-align: center;
            border-radius: 10px;
            padding: 1rem 0;
            color: #fff;
            font-size: 1.2rem;

            &:hover {
                background: linear-gradient(85deg, #25ac8aff, #5cad41ff);
            }
        }
    }
`

export default function Contato() {
    return (
        <SecaoContato>
            <h1>Entre em Contato</h1>
            <SecaoContatoParagrafo>Estamos prontos para atender você e seu pet. Agende uma consulta ou tire suas dúvidas</SecaoContatoParagrafo>
            <SecaoContatoContainer>
                <SecaoContatoEsquerdo>
                    <div>
                        <h2><CiLocationOn className="contato-icone"/>Endereço</h2>
                        <p>Rua dos Veterinários, 123 - São Paulo, SP</p>
                    </div>
                    <div>
                        <h2><FiPhone  className="contato-icone"/>Telefone</h2>
                        <p>(11) 9999-9999</p>
                    </div>
                    <div>
                        <h2><MdOutlineEmail  className="contato-icone"/>Email</h2>
                        <p>contato@clinicavet.com.br</p>
                    </div>
                    <div>
                        <h2><MdAccessTime className="contato-icone"/>Horário</h2>
                        <p>Seg-Sex: 8h-20h | Sáb: 8h-14h</p>
                    </div>
                </SecaoContatoEsquerdo>

                <SecaoContatoDireita>
                    <h2>Envie uma Mensagem</h2>
                    <form action="">
                        <input type="text" placeholder="Seu nome"/>
                        <input type="text" placeholder="Seu email"/>
                        <input type="text" placeholder="Telefone"/>
                        <textarea name="" id="" placeholder="Sua mensagem"></textarea>
                        <a href="">Enviar mensagem</a>
                    </form>
                </SecaoContatoDireita>

            </SecaoContatoContainer>

        </SecaoContato>
    )
}