import { NumericFormat } from "react-number-format";
import { Input } from "./input";

export default function CurrencyWon({
  displayType = "input",
  ...props
}: {
  [x: string]: any;
  displayType?: "input" | "text";
}) {
  return (
    <NumericFormat
      customInput={Input}
      thousandSeparator
      {...props}
      suffix={"원"}
      displayType={displayType}
    />
  );
}
