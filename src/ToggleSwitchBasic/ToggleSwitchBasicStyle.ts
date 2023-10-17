import styled from "styled-components";

interface LabelPropType {
  size: number;
  width: number;
  buttonShadow: string;
  backgroundShadow: string;
  outlineOnFocus: boolean;
  outlineColor: string;
  outlineWidth: string;
  transitionDuration: string;
  bgColorChecked: string;
  bgColorUnchecked: string;
}

export const Label = styled.label<LabelPropType>`
  height: ${(props) => props.size + "rem"};
  width: ${(props) => props.size * props.width + "rem"};
  display: inline-block;
  position: relative;

  input {
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + span {
      background-color: ${(props) => props.bgColorChecked};
      &::before {
        transform: ${(props) =>
          `translateX(${props.size * (props.width - 1)}rem)`};
      }
    }
    &:focus + span {
      border: ${(props) =>
        props.outlineOnFocus
          ? `${props.outlineWidth} solid ${props.outlineColor}`
          : "none"};
    }
  }

  span {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background-color: ${(props) => props.bgColorUnchecked};
    display: flex;
    align-items: center;
    border-radius: 10rem;
    transition: ${(props) =>
      `background-color ${props.transitionDuration} ease`};
    box-shadow: ${(props) => props.backgroundShadow};
    &::before {
      position: absolute;
      content: "";
      left: ${(props) => (props.size < 3.5 ? "0.2rem" : "0.5rem")};
      width: ${(props) =>
        props.size < 3.5 ? `${props.size - 0.5}rem` : `${props.size - 1}rem`};
      aspect-ratio: 1;
      background-color: white;
      border-radius: 50%;
      transition: ${(props) => `all ${props.transitionDuration} ease`};
      box-shadow: ${(props) => props.buttonShadow};
    }
  }
`;
