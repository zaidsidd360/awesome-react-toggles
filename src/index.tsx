import styled from "styled-components";

interface ToggelSwitchPropType {
  size?: number;
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

const ToggleSwitch = ({
  size = 3.2,
  onToggle,
  isToggled,
  buttonShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  backgroundShadow = "rgba(50, 50, 93, 0.25) 0px 15px 30px -15px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
  outlineOnFocus = true,
  outlineColor = "gray",
  outlineWidth = "1px",
  bgColorChecked = "#4cda64",
  bgColorUnchecked = "#dbdbdb",
}: ToggelSwitchPropType) => {
  const multiplier = size < 4 ? 0.25 : 0;

  return (
    <Label
      htmlFor="checkbox"
      size={size}
      multiplier={multiplier}
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
      <span></span>
    </Label>
  );
};

interface LabelPropType {
  size: number;
  multiplier: number;
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
  width: ${(props) => props.size * 2 - 1 + props.multiplier + "rem"};
  display: inline-block;
  position: relative;

  input {
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + span::before {
      /* transform: translateX(calc(95/100 * 5rem + 0.5rem/2)); */
      transform: translateX(100%);
    }
    &:checked + span {
      background-color: ${(props) => props.bgColorChecked};
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
      left: ${(props) => 0.5 - props.multiplier / 2 + "rem"};
      width: ${(props) => props.size - 1 + props.multiplier + "rem"};
      aspect-ratio: 1;
      background-color: white;
      border-radius: 50%;
      transition: all 200ms ease;
      box-shadow: ${(props) => props.buttonShadow};
    }
  }
`;

export default ToggleSwitch;
