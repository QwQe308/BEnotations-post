import type Decimal from "break_eternity.js";
import { Notation } from "./notation";
import { layerMagFormatting, formatNumber} from "./utils";
// Import { formatMantissaWithExponent, formatMantissaBaseTen } from "./utils";

export class StackedScientificNotation extends Notation {
  public get name(): string {
    return "Stacked Scientific";
  }

  public formatLDecimal(value: Decimal, places: number): string {
    if (!value.isFinite) return `${value.sign === -1 ? "-" : ""}Infinity`;
    if (value.layer <= 4) {
      let str = "";
      str += "e".repeat(value.layer - 1);
      return `${str}${formatNumber(10 ** (value.mag % 1), places, false)}e${formatNumber(Math.floor(value.mag), 99, true)}`;
    }
    return layerMagFormatting(value, places, "]", "[e^");
  }
}

// Public formatDecimal(value: Decimal, places: number, placesExponent: number): string {
//   return formatMantissaWithExponent(formatMantissaBaseTen, this.formatExponent.bind(this),
//     10, 1, (x, _) => formatMantissaBaseTen(x, 0)
//   )(value, places, placesExponent);
// }
//
