import React from 'react';

import * as S from './Accordion.styled';

const Accodrion = ({ children, isOpen }) => {
	return <S.SAccordion isOpen={isOpen}>{children}</S.SAccordion>;
};

export default Accodrion;
