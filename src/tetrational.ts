/* eslint-disable linebreak-style */
import type Decimal from "break_eternity.js";
import { Notation } from "./notation";
import { layerMagFormatting } from "./utils";

export class TetrationalNotation extends Notation {
  public get name(): string {
    return "Tetrational";
  }

  public formatLDecimal(value: Decimal, places: number): string {
    if (!value.isFinite) return "Infinity";
    return layerMagFormatting(value, places, "^", "10^^", true);
  }
//  Public formatDecimal(value: Decimal, places: number, placesExponent: number): string {
//    const log10 = value.log10();
//    return `e${this.formatExponent(log10, places, (n, p) => n.toFixed(p), placesExponent)}`;
//  }
}
