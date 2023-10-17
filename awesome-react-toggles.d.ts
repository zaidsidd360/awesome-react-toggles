declare module "awesome-react-toggles" {
  export function ToggleSwitchBasic(
    props: ToggleSwitchBasicPropType
  ): JSX.Element;

  export interface ToggleSwitchBasicPropType {
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
}
