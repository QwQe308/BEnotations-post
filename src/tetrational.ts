/* eslint-disable linebreak-style */
import type Decimal from "break_eternity.js";
import { Notation } from "./notation";
import { formatNumber, roundExpTo } from "./utils";

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
export class TetrationalNotation extends Notation {
  public get name(): string {
    return "Tetrational";
  }

  public formatLDecimal(inputVal: Decimal, places: number): string {
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
    return layerMagFormatting(value.layer, value.mag, value.sign, places, "^", "10^^");
  }
//  Public formatDecimal(value: Decimal, places: number, placesExponent: number): string {
//    const log10 = value.log10();
//    return `e${this.formatExponent(log10, places, (n, p) => n.toFixed(p), placesExponent)}`;
//  }
}
