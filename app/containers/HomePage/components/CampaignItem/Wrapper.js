import styled from 'styled-components';

export default styled.div`
  position: relative;
  display: block;
  background-color: #fff;
  box-shadow: ${props =>
    props.isActivated ? '0 0 0px 3px #FF5722' : '0 0 0 3px #dddde5'};
  border-radius: .375rem;
  color: #111236;

  padding: 5px;
  margin: 0px 0px 20px 0px;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
`;
