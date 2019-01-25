# Reactful Controlled Inputs

Yet another package for input components in Framer X, but this time they behave like traditional [React Controlled Components](https://reactjs.org/docs/forms.html#controlled-components).

## Usage

_Important: You have to do this for these inputs to work!_

Override the inputs `value` and `onValueChange` props so you are controlling the input's state with a value stored in a `Data` object.

```Typescript
const data = Data({ text: "" });

export const controlText: Override = foo => {
  return {
    value: data.text,
    onValueChange: (value: string) => {
      console.log(value);
      data.text = value;
    }
  };
};

```

This will allow you to easily change the value of the input at runtime by changing the value in the the `Data` object.

```Typescript
export const prefillText: Override = () => {
  return {
    onTap: () => {
      data.text = "John Doe";
    }
  };
};
```

### Result

![Example Gif](images/example.gif)

## Props

### Primary

| Name            | Type                      | Description                     |
| --------------- | ------------------------- | ------------------------------- |
| `value`         | `string`                  | The current value of the input. |
| `onValueChange` | `(value: string) => void` | Event for input value changing. |

### Styling

| Name        | Type                                 | Description                                                     |
| ----------- | ------------------------------------ | --------------------------------------------------------------- |
| `stlying`   | `"standard" | "transparent" | "css"` | The styling of the input.                                       |
| `className` | `string`                             | If `styling` is set to `css`, the css class name for the input. |

_Note: To use CSS in Framer X a create a file named `styles.css` in your project's `code/` directory and write all your styles in there._

### Other Attributes

#### All Input Types

- `placeholder`
- `disbaled`
- `readOnly`

#### Number Input Only

- `numberMin`
- `numberMax`
- `numberStep`

#### Select Input Only

- `selectOptions`

### Other Events

- `onBlur`
- `onFocus`
- `onMouseEnter`
- `onMouseLeave`

## Example Project

You can download an example project showing how to use this component [here](https://github.com/ourveryown/framer-x-controlled-inputs/blob/master/ControlledInputs.framerx).
