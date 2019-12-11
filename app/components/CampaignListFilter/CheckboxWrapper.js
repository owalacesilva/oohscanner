import styled from 'styled-components';

const checkboxStyles = styled.css`
  input[type="checkbox"],
  input[type="radio"] {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }
  label {
    position: relative;
    display: inline-block;
    padding: 0 0 0 2em;
    height: 1.5em;
    line-height: 1.5;
    cursor: pointer;
  }
  label::before,
  label::after {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 1.5em;
    height: 1.5em;
  }
  label::before {
    content: " ";
    border: 2px solid #bdc3c7;
    border-radius: 20%;
  }
  /* Checkbox */
  input[type="checkbox"] + label::after {
    content: "\2714";
    color: #2c3e50;
    line-height: 1.5;
    text-align: center;
  }
  /* Radio */
  input[type="radio"] + label::before {
    border-radius: 50%;
  }
  input[type=radio] + label::after {
    content: " ";
    top: .25em;
    left: .25em;
    width: 1em;
    height: 1em;
    background: #fff;
    border: .2em solid #2c3e50;
    border-radius: 50%;
  }
  /* :checked */
  input[type="checkbox"]:checked + label::before,
  input[type="radio"]:checked + label::before {
    background: #fff;
    border-color: #fff;
  }
  input[type="checkbox"] + label::after,
  input[type=radio] + label::after {
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
  }
  input[type="checkbox"]:checked + label::after,
  input[type=radio]:checked + label::after {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  /* Transition */
  label::before,
  label::after {
    -webkit-transition: .25s all ease;
    -o-transition: .25s all ease;
    transition: .25s all ease;
  }
`;

export default checkboxStyles;
