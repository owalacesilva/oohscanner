import styled from 'styled-components';

export const accordionToggle = styled.button`
  width: 100%;
  padding: .375rem 0;
  border: 0;
  background-color: transparent;
  box-shadow: inset 0 -1px 0 0 #dddde5;
  margin: 0px 0px 5px 0px;
  text-align: left;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: #02122c;
  color: var(--bpk-accordion-color, #02122c);
`;

export const accordionText = styled.span`
  display: inline-block;
  flex-grow: 1;
`;

export const accordionWrapper = styled.span`
  display: inline-flex;
  width: 100%;
  flex-direction: row;
`;

export default {
  accordionToggle,
  accordionText,
  accordionWrapper
};