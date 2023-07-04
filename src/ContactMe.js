import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const ContactMe = () => {
    return (
        <section id="contact" class="section">
            <h1 class="contact__title">Contact</h1>
            <h2 class="contact__email">cmhinst@gmail.com</h2>
            <p class="contact_desc">이메일을 보내 주시면 24시간 내 회신드리겠습니다</p>
            <div class="contact__links">
                <a href="https://github.com/mihyunInst">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
            <p class="contact__rights">
            ⓒ 2023 Cho Mihyun all rights reserved
            </p>
        </section>
    )
}

export default ContactMe;