/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type Decimal from "break_eternity.js";
import { Notation } from "./notation";
import { formatNumber, roundExpTo } from "./utils";
// Import { formatMantissaWithExponent, formatMantissaBaseTen } from "./utils";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, max-params
function layerMagFormatting(
  layer: number,
  mag: number,
  sign: number,
  accuracy: number,
  magtext: string,
  layertext: string
) {
  let output = magtext.toString();
  if (sign != 1) {
    output = `-${output}`;
    if (sign == 0) return "0";
  }
  output += formatNumber(layer, accuracy).toString();
  output += layertext;
  output += formatNumber(mag, accuracy).toString();
  return output;
}

export class SemiStackedScientificNotation extends Notation {
  public get name(): string {
    return "Semi-Stacked Scientific";
  }

  public formatLDecimal(inputVal: Decimal, places: number): string {
    if (inputVal.layer <= 4) {
      let str = "";
      str += "e".repeat(inputVal.layer - 1);
      if (inputVal.mag < 250) {
        return str + formatNumber(10 ** (inputVal.mag % 1), 2) + formatNumber(inputVal.mag, places);
      }
      return `${str}e${formatNumber(inputVal.mag, places)}`;
    }
    const placeholderValue = roundExpTo(inputVal, places);
    let value = {layer: 0,
      mag: 0,
      sign: 0};
    if (placeholderValue.mag < 250) {
      value = {
        layer: placeholderValue.layer - 1,
        mag: 10 ** placeholderValue.mag,
        sign: placeholderValue.sign
      };
    } else {
      value = {
        layer: placeholderValue.layer,
        mag: placeholderValue.mag,
        sign: placeholderValue.sign
      };
    }
    return layerMagFormatting(value.layer, value.mag, value.sign, places, "E", "F");
  }

// Public formatDecimal(value: Decimal, places: number, placesExponent: number): string {
//   return formatMantissaWithExponent(formatMantissaBaseTen, this.formatExponent.bind(this),
//     10, 1, (x, _) => formatMantissaBaseTen(x, 0)
//   )(value, places, placesExponent);
// }
//
}
