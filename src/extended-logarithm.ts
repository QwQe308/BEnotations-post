import type Decimal from "break_eternity.js";
import { Notation } from "./notation";
import { formatNumber } from "./utils";

export class ExtendedLogarithmNotation extends Notation {
  public get name(): string {
    return "Extended Logarithm";
  }

  public formatLDecimal(value: Decimal, places: number): string {
    return `F${formatNumber(value.slog().toNumber(), places)}`;
  }
//  Public formatDecimal(value: Decimal, places: number, placesExponent: number): string {
//    const log10 = value.log10();
//    return `e${this.formatExponent(log10, places, (n, p) => n.toFixed(p), placesExponent)}`;
//  }
}
