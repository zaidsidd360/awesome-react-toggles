<h1>Awesome-react-toggles</h1>

<p align="center">🚀 React component that renders a toggle switch 🔘✅ </p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#props">Props</a> •
  <a href="#report-a-bug">Report a bug</a>
</p>

## Features
- Customizable styles and toggle duration. ✅
- Support onToggle callback. 🔄
- In-built multiple toggle switch variants. (in-progress) 🚀

## Installation
Install package with NPM or YARN and add it to your development dependencies:
```
npm install awesome-react-toggles
```
OR
```
yarn add awesome-react-toggles
```

## Usage
```
import { ToggleSwitchBasic } from "awesome-react-toggles";

function App(props) {

  const handleToggle = () => {
    window.alert("Toggle works!")
  }

  return (
    <ToggleSwitchBasic
      onToggle={handleToggle}
    />
  );
}
```

## Props
| name | description | type | default
|--|--|--|--
| `size` | Overall size of the entire toggle component. | number | 3.2
| `width` | Width of the toggle component. | number | 2
| `onToggle` | Callback funtion for when the switch is toggled on or off. | () => void | undefined
| `isToggled` | Sets the switch's toggled state on or off based on the given value. | boolean | undefined
| `buttonShadow` | Button's box shadow. | string (must be a valid CSS box-shadow value) | "rgba(0, 0, 0, 0.35) 0px 5px 15px"
| `backgroundShadow` | Background's box shadow. | string (must be a valid CSS box-shadow value) | "rgba(50, 50, 93, 0.25) 0px 15px 30px -15px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
| `outlineOnFocus` | Whether the toggle component is outlined when focused or not. | boolean | true
| `outlineColor` | Color of the outline. | string (must be a valid CSS color value) | "gray"
| `outlineWidth` | Width of the outline. | string (must be a number followed by a valid CSS unit) | "1px"
| `transitionDuration` | Duration of the transition of the switch from off to on and vice versa. | string (must be a number followed by a valid CSS unit) | "200ms"
| `bgColorChecked` | Background color when the switch is toggled on | string (must be a valid CSS color value) | "#4cda64"
| `bgColorUnchecked` | Background color when the switch is toggled off | string (must be a valid CSS color value) | "#dbdbdb"

## Report a bug
If you found a bug in this library, please file an GitHub issue [here](https://github.com/zaidsidd360/awesome-react-toggles/issues).
