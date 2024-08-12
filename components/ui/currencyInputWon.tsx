import { NumericFormat } from "react-number-format";
import { Input } from "./input";
import { forwardRef } from "react";

const CurrencyWon = forwardRef(
  (
    {
      displayType = "input",
      ...props
    }: {
      [x: string]: any;
      displayType?: "input" | "text";
    },
    ref
  ) => {
    return (
      <NumericFormat
        className="bg-inherit"
        customInput={Input}
        thousandSeparator
        {...props}
        suffix={"원"}
        displayType={displayType}
      />
    );
  }
);

export default CurrencyWon;
