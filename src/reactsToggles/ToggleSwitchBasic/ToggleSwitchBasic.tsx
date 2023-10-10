import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { useEffect, useState } from "react";
import { Label } from "./ToggleSwitchBasicStyle";

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
  transitionDuration?: string;
  bgColorChecked: string;
  bgColorUnchecked?: string;
}

const ToggleSwitchBasic = (props: ToggelSwitchBasicPropType) => {
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
    transitionDuration = "200ms",
    bgColorChecked = "#4cda64",
    bgColorUnchecked = "#dbdbdb",
  } = props;

  const [checkedWidth, setCheckedWidth] = useState(size);

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
          transitionDuration={transitionDuration}
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

export default ToggleSwitchBasic;
