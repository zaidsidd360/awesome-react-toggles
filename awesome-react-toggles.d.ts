declare module "awesome-react-toggles" {
  export function ToggleDefault(props: ToggleDefaultProp): JSX.Element;

  export interface ToggleDefaultProp {
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
