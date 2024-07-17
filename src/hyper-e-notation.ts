import type Decimal from "break_eternity.js";
import { Notation } from "./notation";
import { layerMagFormatting } from "./utils";
// Import { formatMantissaWithExponent, formatMantissaBaseTen } from "./utils";

export class HyperENotation extends Notation {
  public get name(): string {
    return "Hyper E notation";
  }


  public formatLDecimal(value: Decimal, places: number): string {
    if (!value.isFinite) return "Infinity";
    return layerMagFormatting(value, places, "E", "#", true);
  }

// Public formatDecimal(value: Decimal, places: number, placesExponent: number): string {
//   return formatMantissaWithExponent(formatMantissaBaseTen, this.formatExponent.bind(this),
//     10, 1, (x, _) => formatMantissaBaseTen(x, 0)
//   )(value, places, placesExponent);
// }
//
}
