import React from 'react';
import logo from '~/images/logocc.jpg';

import { ContainerGlobal } from '~/styles/global';
import { Container, Head, Nav, Separator, ProfileUser, Logo } from './styles';

export default function Header() {
  return (
    <Container>
      <Head>
        <ContainerGlobal>
          <ul>
            <li>
              <a href="/">
                <MdInfoOutline /> <span>Como funciona</span>
                <small>Te ajudamos</small>
              </a>
            </li>
            <Separator />
            <li id="item-call">
              <a href="/">
                <FaWhatsapp color="#25D366" />
                <div>
                  <strong>0800 0101 1010</strong>
                  <span>Converse com a gente</span>
                </div>
              </a>
            </li>
          </ul>
          <Logo>
            <img src={logo} alt="logotipo" />
          </Logo>
          <ProfileUser>
            <div>
              <span>Nome sobrenome</span>
              <FaRegUserCircle /> <small>Conta</small>
            </div>
          </ProfileUser>
        </ContainerGlobal>
      </Head>
      <Nav>
        <ContainerGlobal>
          <small>Sua conta</small>
          <button type="button">
            Menu <MdExpandMore />
          </button>
          <ul>
            <li>
              <a href="/">Sua conta</a>
            </li>
            <li>
              <a href="/">Pré-matriculas</a>
            </li>
            <li>
              <a href="/" className="active">
                Cursos favoritos
              </a>
            </li>
          </ul>
        </ContainerGlobal>
      </Nav>
    </Container>
  );
}