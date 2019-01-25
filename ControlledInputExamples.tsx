import { Data, Override } from "framer";

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

export const prefillText: Override = () => {
  return {
    onTap: () => {
      data.text = "John Doe";
    }
  };
};
