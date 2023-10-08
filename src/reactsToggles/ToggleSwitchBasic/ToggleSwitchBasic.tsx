import styled, { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { useEffect, useState } from "react";

interface ToggelSwitchBasicPropType {
  size?: number;
  width?: number;
  onToggle?: () => void;
  isToggled?: boolean;
  buttonShadow?: string;
  backgroundShadow?: string;
  outlineOnFocus?: boolean;
  outlineColor?: string;
  outlineWidth?: string;
  bgColorChecked: string;
  bgColorUnchecked?: string;
}

const ToggleSwitchBasic = (props: ToggelSwitchBasicPropType) => {
  const [checkedWidth, setCheckedWidth] = useState(0);
  /*
  TODO: ADD TRANSITION DURATION PROP AND MEDIA QUERY PROP
  */
  const {
    size = 3.2,
    width = 2,
    onToggle,
    isToggled,
    buttonShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    backgroundShadow = "rgba(50, 50, 93, 0.25) 0px 15px 30px -15px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
    outlineOnFocus = true,
    outlineColor = "gray",
    outlineWidth = "1px",
    bgColorChecked = "#4cda64",
    bgColorUnchecked = "#dbdbdb",
  } = props;

  useEffect(() => {
    if (width < 2) setCheckedWidth(2);
    else setCheckedWidth(width);
  }, [width]);

  return (
    <>
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <Label
          htmlFor="checkbox"
          size={size}
          width={checkedWidth}
          buttonShadow={buttonShadow}
          backgroundShadow={backgroundShadow}
          outlineOnFocus={outlineOnFocus}
          outlineColor={outlineColor}
          outlineWidth={outlineWidth}
          bgColorChecked={bgColorChecked}
          bgColorUnchecked={bgColorUnchecked}
        >
          <input
            onChange={onToggle}
            checked={isToggled}
            type="checkbox"
            name="checkbox"
            id="checkbox"
          />
          <span />
        </Label>
      </StyleSheetManager>
    </>
  );
};

interface LabelPropType {
  size: number;
  width: number;
  buttonShadow: string;
  backgroundShadow: string;
  outlineOnFocus: boolean;
  outlineColor: string;
  outlineWidth: string;
  bgColorChecked: string;
  bgColorUnchecked: string;
}

const Label = styled.label<LabelPropType>`
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
    transition: background-color 200ms ease;
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
      transition: all 200ms ease;
      box-shadow: ${(props) => props.buttonShadow};
    }
  }
`;

export default ToggleSwitchBasic;
