import styled from 'styled-components';
import { text } from '../color';

const headingTemplate = `
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  color: ${text};
  margin-top: 0;
  margin-bottom: 0;
`;

export const H1 = styled.h1`
  ${headingTemplate}
  font-size: 60px;
  font-weight: 300;
  letter-spacing: -0.3px;
`;

export const H2 = styled.h2`
  ${headingTemplate}
  font-size: 44px;
  font-weight: 300;
  letter-spacing: -0.3px;
`;

export const H3 = styled.h3`
  ${headingTemplate}
  font-size: 38px;
  font-weight: 300;
  letter-spacing: -0.3px;
`;

export const H4 = styled.h4`
  ${headingTemplate}
  font-size: 28px;
  font-weight: 300;
  letter-spacing: -0.3px;
`;

export const H5 = styled.h5`
  ${headingTemplate}
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -0.8px;
`;

export const H6 = styled.h6`
  ${headingTemplate}
  font-size: 20px;
  font-weight: normal;
  letter-spacing: -0.8px;
`;
