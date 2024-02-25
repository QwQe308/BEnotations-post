import Decimal from "break_eternity.js";

export abstract class Notation {
  public abstract get name(): string;

  public abstract formatLDecimal(value: Decimal, places: number): string;

}
