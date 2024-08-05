/* eslint-disable linebreak-style */
import Decimal from "break_eternity.js";
import { ExtendedLogarithmNotation } from "../extended-logarithm";
import { ExtendedScientificNotation } from "../extended-scientific";
import { HyperENotation } from "../hyper-e-notation";
import { SemiStackedScientificNotation } from "../semi-stacked-scientific";
import { StackedScientificNotation } from "../stacked-scientific";
import { TetrationalNotation } from "../tetrational";
import { TrueTetrationalNotation } from "../true-tetrational";

describe("Semi-Stacked Scientific Notation", () => {
  const notation = new SemiStackedScientificNotation();

  it("should return the expected name", () => {
    expect(notation.name).toBe("Semi-Stacked Scientific");
  });


  it("should format values from e9e15 to ee100 as eXeY", () => {
    expect(notation.formatLDecimal(new Decimal("e7e23"), 3)).toBe("e7.00e23");
    expect(notation.formatLDecimal(new Decimal("e7.15e23"), 3)).toBe("e7.15e23");
    expect(notation.formatLDecimal(new Decimal("e7e23"), 1)).toBe("e7e23");
    expect(notation.formatLDecimal(new Decimal("e7e47"), 3)).toBe("e7.00e47");
    expect(notation.formatLDecimal(new Decimal("e7e99"), 3)).toBe("e7.00e99");
  });

  it("should format values from ee9e15 to eee100 as eeXeY", () => {
    expect(notation.formatLDecimal(new Decimal("ee7e23"), 3)).toBe("ee7.00e23");
    expect(notation.formatLDecimal(new Decimal("ee7.15e23"), 3)).toBe("ee7.15e23");
    expect(notation.formatLDecimal(new Decimal("ee7e23"), 1)).toBe("ee7e23");
    expect(notation.formatLDecimal(new Decimal("ee7e47"), 3)).toBe("ee7.00e47");
    expect(notation.formatLDecimal(new Decimal("ee7e99"), 3)).toBe("ee7.00e99");
  });

  it("should format values from eee9e15 to eeee100 as eeeXeY", () => {
    expect(notation.formatLDecimal(new Decimal("eee7e23"), 3)).toBe("eee7.00e23");
    expect(notation.formatLDecimal(new Decimal("eee7.15e23"), 3)).toBe("eee7.15e23");
    expect(notation.formatLDecimal(new Decimal("eee7e23"), 1)).toBe("eee7e23");
    expect(notation.formatLDecimal(new Decimal("eee7e47"), 3)).toBe("eee7.00e47");
    expect(notation.formatLDecimal(new Decimal("eee7e99"), 3)).toBe("eee7.00e99");
  });

  it("should format values above eeee9e15 as FxEy", () => {
    expect(notation.formatLDecimal(new Decimal("eeee7e23"), 3)).toBe("F4E7.00e23");
    expect(notation.formatLDecimal(new Decimal("eeee7.15e23"), 3)).toBe("F4E7.15e23");
    expect(notation.formatLDecimal(new Decimal("eeee7e23"), 1)).toBe("F4E7e23");
    expect(notation.formatLDecimal(new Decimal("eeee7e47"), 3)).toBe("F4E7.00e47");
    expect(notation.formatLDecimal(new Decimal("eeee7e99"), 3)).toBe("F4E7.00e99");
  });
});

describe("Stacked Scientific Notation", () => {
  const notation = new StackedScientificNotation();

  it("should return the expected name", () => {
    expect(notation.name).toBe("Stacked Scientific");
  });


  it("should format values from e9e15 to ee100 as eXeY", () => {
    expect(notation.formatLDecimal(new Decimal("e7e23"), 3)).toBe("e7.00e23");
    expect(notation.formatLDecimal(new Decimal("e7.15e23"), 3)).toBe("e7.15e23");
    expect(notation.formatLDecimal(new Decimal("e7e23"), 1)).toBe("e7e23");
    expect(notation.formatLDecimal(new Decimal("e7e47"), 3)).toBe("e7.00e47");
    expect(notation.formatLDecimal(new Decimal("e7e99"), 3)).toBe("e7.00e99");
  });

  it("should format values from ee9e15 to eee100 as eeXeY", () => {
    expect(notation.formatLDecimal(new Decimal("ee7e23"), 3)).toBe("ee7.00e23");
    expect(notation.formatLDecimal(new Decimal("ee7.15e23"), 3)).toBe("ee7.15e23");
    expect(notation.formatLDecimal(new Decimal("ee7e23"), 1)).toBe("ee7e23");
    expect(notation.formatLDecimal(new Decimal("ee7e47"), 3)).toBe("ee7.00e47");
    expect(notation.formatLDecimal(new Decimal("ee7e99"), 3)).toBe("ee7.00e99");
  });

  it("should format values from eee9e15 to eeee100 as eeeXeY", () => {
    expect(notation.formatLDecimal(new Decimal("eee7e23"), 3)).toBe("eee7.00e23");
    expect(notation.formatLDecimal(new Decimal("eee7.15e23"), 3)).toBe("eee7.15e23");
    expect(notation.formatLDecimal(new Decimal("eee7e23"), 1)).toBe("eee7e23");
    expect(notation.formatLDecimal(new Decimal("eee7e47"), 3)).toBe("eee7.00e47");
    expect(notation.formatLDecimal(new Decimal("eee7e99"), 3)).toBe("eee7.00e99");
  });

  it("should format values above eeee9e15 as [e^x]y", () => {
    expect(notation.formatLDecimal(new Decimal("eeee7e23"), 3)).toBe("[e^4]7.00e23");
    expect(notation.formatLDecimal(new Decimal("eeee7.15e23"), 3)).toBe("[e^4]7.15e23");
    expect(notation.formatLDecimal(new Decimal("eeee7e23"), 1)).toBe("[e^4]7e23");
    expect(notation.formatLDecimal(new Decimal("eeee7e47"), 3)).toBe("[e^4]7.00e47");
    expect(notation.formatLDecimal(new Decimal("eeee7e99"), 3)).toBe("[e^4]7.00e99");
  });
});

describe("Extended Scientific Notation", () => {
  const notation = new ExtendedScientificNotation();

  it("should return the expected name", () => {
    expect(notation.name).toBe("Extended Scientific");
  });


  it("should format all values as FxEy", () => {
    expect(notation.formatLDecimal(new Decimal("e7e23"), 3)).toBe("F1E7.00e23");
    expect(notation.formatLDecimal(new Decimal("e7.15e23"), 3)).toBe("F1E7.15e23");
    expect(notation.formatLDecimal(new Decimal("e7e23"), 1)).toBe("F1E7e23");
    expect(notation.formatLDecimal(new Decimal("e7e47"), 3)).toBe("F1E7.00e47");
    expect(notation.formatLDecimal(new Decimal("e7e99"), 3)).toBe("F1E7.00e99");
    expect(notation.formatLDecimal(new Decimal("ee7e23"), 3)).toBe("F2E7.00e23");
    expect(notation.formatLDecimal(new Decimal("ee7.15e23"), 3)).toBe("F2E7.15e23");
    expect(notation.formatLDecimal(new Decimal("ee7e23"), 1)).toBe("F2E7e23");
    expect(notation.formatLDecimal(new Decimal("ee7e47"), 3)).toBe("F2E7.00e47");
    expect(notation.formatLDecimal(new Decimal("ee7e99"), 3)).toBe("F2E7.00e99");
    expect(notation.formatLDecimal(new Decimal("eee7e23"), 3)).toBe("F3E7.00e23");
    expect(notation.formatLDecimal(new Decimal("eee7.15e23"), 3)).toBe("F3E7.15e23");
    expect(notation.formatLDecimal(new Decimal("eee7e23"), 1)).toBe("F3E7e23");
    expect(notation.formatLDecimal(new Decimal("eee7e47"), 3)).toBe("F3E7.00e47");
    expect(notation.formatLDecimal(new Decimal("eee7e99"), 3)).toBe("F3E7.00e99");
    expect(notation.formatLDecimal(new Decimal("eeee7e23"), 3)).toBe("F4E7.00e23");
    expect(notation.formatLDecimal(new Decimal("eeee7.15e23"), 3)).toBe("F4E7.15e23");
    expect(notation.formatLDecimal(new Decimal("eeee7e23"), 1)).toBe("F4E7e23");
    expect(notation.formatLDecimal(new Decimal("eeee7e47"), 3)).toBe("F4E7.00e47");
    expect(notation.formatLDecimal(new Decimal("eeee7e99"), 3)).toBe("F4E7.00e99");
  });
});

describe("Extended Logarithm Notation", () => {
  const notation = new ExtendedLogarithmNotation();

  it("should return the expected name", () => {
    expect(notation.name).toBe("Extended Logarithm");
  });


  it("should format all values as Fx", () => {
    expect(notation.formatLDecimal(new Decimal("e7e23"), 3)).toBe("F3.19");
    expect(notation.formatLDecimal(new Decimal("e7.15e23"), 3)).toBe("F3.19");
    expect(notation.formatLDecimal(new Decimal("e7e23"), 1)).toBe("F3");
    expect(notation.formatLDecimal(new Decimal("e7e47"), 3)).toBe("F3.30");
    expect(notation.formatLDecimal(new Decimal("e7e99"), 3)).toBe("F3.39");
    expect(notation.formatLDecimal(new Decimal("ee7e23"), 4)).toBe("F4.188");
    expect(notation.formatLDecimal(new Decimal("ee7.15e23"), 4)).toBe("F4.188");
    expect(notation.formatLDecimal(new Decimal("ee7e23"), 1)).toBe("F4");
    expect(notation.formatLDecimal(new Decimal("ee7e47"), 4)).toBe("F4.300");
    expect(notation.formatLDecimal(new Decimal("ee7e99"), 4)).toBe("F4.393");
    expect(notation.formatLDecimal(new Decimal("eee7e23"), 5)).toBe("F5.1880");
    expect(notation.formatLDecimal(new Decimal("eee7.15e23"), 5)).toBe("F5.1881");
    expect(notation.formatLDecimal(new Decimal("eee7e23"), 1)).toBe("F5");
    expect(notation.formatLDecimal(new Decimal("eee7e47"), 5)).toBe("F5.2999");
    expect(notation.formatLDecimal(new Decimal("eee7e99"), 5)).toBe("F5.3927");
    expect(notation.formatLDecimal(new Decimal("eeee7e23"), 6)).toBe("F6.18799");
    expect(notation.formatLDecimal(new Decimal("eeee7.15e23"), 6)).toBe("F6.18806");
    expect(notation.formatLDecimal(new Decimal("eeee7e23"), 1)).toBe("F6");
    expect(notation.formatLDecimal(new Decimal("eeee7e47"), 6)).toBe("F6.29987");
    expect(notation.formatLDecimal(new Decimal("eeee7e99"), 6)).toBe("F6.39273");
  });
});

describe("Hyper E Notation", () => {
  const notation = new HyperENotation();

  it("should return the expected name", () => {
    expect(notation.name).toBe("Hyper E");
  });


  it("should format all values as Ex#Y", () => {
    expect(notation.formatLDecimal(new Decimal("e7e23"), 3)).toBe("E7.00e23#1");
    expect(notation.formatLDecimal(new Decimal("e7.15e23"), 3)).toBe("E7.15e23#1");
    expect(notation.formatLDecimal(new Decimal("e7e23"), 1)).toBe("E7e23#1");
    expect(notation.formatLDecimal(new Decimal("e7e47"), 3)).toBe("E7.00e47#1");
    expect(notation.formatLDecimal(new Decimal("e7e99"), 3)).toBe("E7.00e99#1");
    expect(notation.formatLDecimal(new Decimal("ee7e23"), 3)).toBe("E7.00e23#2");
    expect(notation.formatLDecimal(new Decimal("ee7.15e23"), 3)).toBe("E7.15e23#2");
    expect(notation.formatLDecimal(new Decimal("ee7e23"), 1)).toBe("E7e23#2");
    expect(notation.formatLDecimal(new Decimal("ee7e47"), 3)).toBe("E7.00e47#2");
    expect(notation.formatLDecimal(new Decimal("ee7e99"), 3)).toBe("E7.00e99#2");
    expect(notation.formatLDecimal(new Decimal("eee7e23"), 3)).toBe("E7.00e23#3");
    expect(notation.formatLDecimal(new Decimal("eee7.15e23"), 3)).toBe("E7.15e23#3");
    expect(notation.formatLDecimal(new Decimal("eee7e23"), 1)).toBe("E7e23#3");
    expect(notation.formatLDecimal(new Decimal("eee7e47"), 3)).toBe("E7.00e47#3");
    expect(notation.formatLDecimal(new Decimal("eee7e99"), 3)).toBe("E7.00e99#3");
    expect(notation.formatLDecimal(new Decimal("eeee7e23"), 3)).toBe("E7.00e23#4");
    expect(notation.formatLDecimal(new Decimal("eeee7.15e23"), 3)).toBe("E7.15e23#4");
    expect(notation.formatLDecimal(new Decimal("eeee7e23"), 1)).toBe("E7e23#4");
    expect(notation.formatLDecimal(new Decimal("eeee7e47"), 3)).toBe("E7.00e47#4");
    expect(notation.formatLDecimal(new Decimal("eeee7e99"), 3)).toBe("E7.00e99#4");
  });
});

describe("Tetrational Notation", () => {
  const notation = new TetrationalNotation();

  it("should return the expected name", () => {
    expect(notation.name).toBe("Tetrational");
  });


  it("should format all values as 10^^x^y", () => {
    expect(notation.formatLDecimal(new Decimal("e7e23"), 3)).toBe("10^^1^7.00e23");
    expect(notation.formatLDecimal(new Decimal("e7.15e23"), 3)).toBe("10^^1^7.15e23");
    expect(notation.formatLDecimal(new Decimal("e7e23"), 1)).toBe("10^^1^7e23");
    expect(notation.formatLDecimal(new Decimal("e7e47"), 3)).toBe("10^^1^7.00e47");
    expect(notation.formatLDecimal(new Decimal("e7e99"), 3)).toBe("10^^1^7.00e99");
    expect(notation.formatLDecimal(new Decimal("ee7e23"), 3)).toBe("10^^2^7.00e23");
    expect(notation.formatLDecimal(new Decimal("ee7.15e23"), 3)).toBe("10^^2^7.15e23");
    expect(notation.formatLDecimal(new Decimal("ee7e23"), 1)).toBe("10^^2^7e23");
    expect(notation.formatLDecimal(new Decimal("ee7e47"), 3)).toBe("10^^2^7.00e47");
    expect(notation.formatLDecimal(new Decimal("ee7e99"), 3)).toBe("10^^2^7.00e99");
    expect(notation.formatLDecimal(new Decimal("eee7e23"), 3)).toBe("10^^3^7.00e23");
    expect(notation.formatLDecimal(new Decimal("eee7.15e23"), 3)).toBe("10^^3^7.15e23");
    expect(notation.formatLDecimal(new Decimal("eee7e23"), 1)).toBe("10^^3^7e23");
    expect(notation.formatLDecimal(new Decimal("eee7e47"), 3)).toBe("10^^3^7.00e47");
    expect(notation.formatLDecimal(new Decimal("eee7e99"), 3)).toBe("10^^3^7.00e99");
    expect(notation.formatLDecimal(new Decimal("eeee7e23"), 3)).toBe("10^^4^7.00e23");
    expect(notation.formatLDecimal(new Decimal("eeee7.15e23"), 3)).toBe("10^^4^7.15e23");
    expect(notation.formatLDecimal(new Decimal("eeee7e23"), 1)).toBe("10^^4^7e23");
    expect(notation.formatLDecimal(new Decimal("eeee7e47"), 3)).toBe("10^^4^7.00e47");
    expect(notation.formatLDecimal(new Decimal("eeee7e99"), 3)).toBe("10^^4^7.00e99");
  });
});

describe("True Tetrational Notation", () => {
  const notation = new TrueTetrationalNotation();

  it("should return the expected name", () => {
    expect(notation.name).toBe("True Tetrational");
  });


  it("should format all values as Fx", () => {
    expect(notation.formatLDecimal(new Decimal("e7e23"), 3)).toBe("10^^3.19");
    expect(notation.formatLDecimal(new Decimal("e7.15e23"), 3)).toBe("10^^3.19");
    expect(notation.formatLDecimal(new Decimal("e7e23"), 1)).toBe("10^^3");
    expect(notation.formatLDecimal(new Decimal("e7e47"), 3)).toBe("10^^3.30");
    expect(notation.formatLDecimal(new Decimal("e7e99"), 3)).toBe("10^^3.39");
    expect(notation.formatLDecimal(new Decimal("ee7e23"), 4)).toBe("10^^4.188");
    expect(notation.formatLDecimal(new Decimal("ee7.15e23"), 4)).toBe("10^^4.188");
    expect(notation.formatLDecimal(new Decimal("ee7e23"), 1)).toBe("10^^4");
    expect(notation.formatLDecimal(new Decimal("ee7e47"), 4)).toBe("10^^4.300");
    expect(notation.formatLDecimal(new Decimal("ee7e99"), 4)).toBe("10^^4.393");
    expect(notation.formatLDecimal(new Decimal("eee7e23"), 5)).toBe("10^^5.1880");
    expect(notation.formatLDecimal(new Decimal("eee7.15e23"), 5)).toBe("10^^5.1881");
    expect(notation.formatLDecimal(new Decimal("eee7e23"), 1)).toBe("10^^5");
    expect(notation.formatLDecimal(new Decimal("eee7e47"), 5)).toBe("10^^5.2999");
    expect(notation.formatLDecimal(new Decimal("eee7e99"), 5)).toBe("10^^5.3927");
    expect(notation.formatLDecimal(new Decimal("eeee7e23"), 6)).toBe("10^^6.18799");
    expect(notation.formatLDecimal(new Decimal("eeee7.15e23"), 6)).toBe("10^^6.18806");
    expect(notation.formatLDecimal(new Decimal("eeee7e23"), 1)).toBe("10^^6");
    expect(notation.formatLDecimal(new Decimal("eeee7e47"), 6)).toBe("10^^6.29987");
    expect(notation.formatLDecimal(new Decimal("eeee7e99"), 6)).toBe("10^^6.39273");
  });
});
