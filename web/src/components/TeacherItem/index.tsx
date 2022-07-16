import React from "react";

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars.githubusercontent.com/u/12562944?v=4" alt="Samuel Costa" />
                <div>
                    <strong>Samuel Costa</strong>
                    <span>Fisica</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias que a física pode proporcionar.
                <br/>
                Apaixonado por fazer experiências malucas no laboratório (e fora dele também!), sempre colocando a vida das pessoas em risco.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type='button'>
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem 