import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Rate,
  Separator,
  UniversityName,
  CourseName,
  CourseKindAndShift,
  CourseStartDate,
  TitleMonthlyFee,
  OldPrice,
  Price,
  Footer,
  ButtonExclude,
  ButtonShowOffer,
  UnavailableText,
} from './styles';
import ScoreStars from '../ScoreStars';

export default function Scholarship({ data, exclude }) {
  return (
    <Container>
      <img src={data.logo_url} alt={data.university_name} />
      <UniversityName>{data.university_name}</UniversityName>
      <CourseName>{data.course_name}</CourseName>
      <Rate>
        {data.university_score} <ScoreStars score={data.university_score} />
      </Rate>
      <Separator />
      <CourseKindAndShift>
        {data.course_kind} . {data.course_shift}
      </CourseKindAndShift>
      <CourseStartDate>As aulas começam em: {data.start_date}</CourseStartDate>
      <Separator />
      <TitleMonthlyFee>
        {data.enabled ? 'Mensalidade com o Quero Bolsa:' : 'Bolsa indisponível'}
      </TitleMonthlyFee>
      {data.enabled ? (
        <>
          <OldPrice>{data.full_price_formatted}</OldPrice>
          <Price>
            {data.price_with_discount_formated}
            <small>/mês</small>
          </Price>
        </>
      ) : (
        <UnavailableText>
          Entre em contato conosco
          <br /> para saber tudo sobre!
        </UnavailableText>
      )}

      <Footer>
        <ButtonExclude onClick={() => exclude(data.id)}>Excluir</ButtonExclude>
        <ButtonShowOffer disabled={!data.enabled}>Checar oferta certeira</ButtonShowOffer>
      </Footer>
    </Container>
  );
}

Scholarship.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
  exclude: PropTypes.func,
};

Scholarship.defaultProps = {
  exclude: null,
};