import type Decimal from "break_eternity.js";
import { Notation } from "./notation";
import { formatNumber } from "./utils";

export class TrueTetrationalNotation extends Notation {
  public get name(): string {
    return "True Tetrational";
  }

  public formatLDecimal(value: Decimal, places: number): string {
    // eslint-disable-next-line newline-per-chained-call
    return `${value.sign === -1 ? "-" : ""}10^^${formatNumber(value.abs().slog().toNumber(), places)}`;
  }
//  Public formatDecimal(value: Decimal, places: number, placesExponent: number): string {
//    const log10 = value.log10();
//    return `e${this.formatExponent(log10, places, (n, p) => n.toFixed(p), placesExponent)}`;
//  }
}
