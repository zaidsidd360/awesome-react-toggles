import styled from 'styled-components';

const ToggleSwitch = () => {
  return (
    <Label htmlFor='checkbox'>
      <input type="checkbox" name="checkbox" id="checkbox" />
      <span></span>
    </Label>
  )
}

const Label = styled.label`
  width: 10rem;
  height: 5rem;
  display: inline-block;
  position: relative;

  input {
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + span::before {
      transform: translateX(calc(95/100 * 5rem + 0.5rem/2));
    }
    &:checked + span {
      background-color: #84fe88;
    }
  }

  span {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background-color: #dbdbdb;
    display: flex;
    align-items: center;
    border-radius: 10rem;
    transition: background-color 200ms ease;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 15px 30px -15px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

    &::before {
      position: absolute;
      left: 0.5rem;
      content: '';
      width: 4rem;
      aspect-ratio: 1;
      background-color: white;
      border-radius: 50%;
      transition: all 200ms ease;
    }
  }
`

export default ToggleSwitch;