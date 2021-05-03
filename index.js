import React from 'react';
import {
  FaWhatsapp,
  FaRegHeart,
  FaRegEnvelope,
  FaRegComments,
} from 'react-icons/fa';
import { MdInfoOutline } from 'react-icons/md';

import { Container, RowContacts, RowFooter, Col } from './styles';
import { ContainerGlobal } from '~/styles/global';

export default function Footer() {
  return (
    <Container>
      <RowContacts>
        <ContainerGlobal>
          <Col>
            <FaWhatsapp size="40" />
            <div>
              <strong>0800 0101 1010</strong>
              <b>0800 0101 1010</b>
              <span>Estamos com todos estudantes</span>
              <small>Segunda a Segunda</small>
            </div>
          </Col>
          <Col>
            <FaRegComments size="40" />
            <div>
              <strong>Tira dúvidas</strong>
              <b>Chat</b>
              <span>Toda hora</span>
            </div>
          </Col>
          <Col>
            <FaRegEnvelope size="40" />
            <div>
              <strong>Mande um e-mail</strong>
              <b>E-mail</b>
              <span>Em breve respondemos!</span>
            </div>
          </Col>
          <Col>
            <MdInfoOutline size="40" />
            <div>
              <strong>Central de ajuda</strong>
              <b>Ajuda</b>
              <span>Encontre todas as respostas</span>
            </div>
          </Col>
        </ContainerGlobal>
      </RowContacts>
      <RowFooter>
        <ContainerGlobal>
          FROM <FaRegHeart /> CONSULTACURSOS
        </ContainerGlobal>
      </RowFooter>
    </Container>
  );
}