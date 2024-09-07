class TMTNotation extends ADBNotations.Notation {
  get name() {
    return "Modding Tree";
  }

  formatDecimal(value, places) {
    value = new Decimal(value)
    if (value.mag == Number.POSITIVE_INFINITY) return "Infinity"
    if (value.gte("eeee1000")) {
        var slog = value.slog()
        if (slog.gte(1e6)) return "F" + this.formatDecimal(slog.floor())
        else return Decimal.pow(10, slog.sub(slog.floor())).toStringWithDecimalPlaces(3) + "F" + this.commaFormat(slog.floor(), 0)
    }
    else if (value.gte("1e1000000")) return this.exponentialFormat(value, 0, false)
    else if (value.gte("1e10000")) return this.exponentialFormat(value, 0)
    else if (value.gte(1e9)) return this.exponentialFormat(value, places)
    else if (value.gte(1e3)) return this.commaFormat(value, 0)
    else if (value.gt(0)) return this.regularFormat(value, places)
    return (0).toFixed(places)
  }

  exponentialFormat(num, precision, mantissa = true) {
    let e = num.log10().floor()
    let m = num.div(Decimal.pow(10, e))
    if (m.toStringWithDecimalPlaces(precision) == 10) {
        m = new Decimal(1)
        e = e.add(1)
    }
    e = (e.gte(1e9) ? this.formatDecimal(e, 3) : (e.gte(10000) ? this.commaFormat(e, 0) : e.toStringWithDecimalPlaces(0)))
    if (mantissa)
        return m.toStringWithDecimalPlaces(precision) + "e" + e
    else return "e" + e
  }

  commaFormat(num, precision) {
    if (num.mag < 0.001) return (0).toFixed(precision)
    let init = num.toStringWithDecimalPlaces(precision)
    let portions = init.split(".")
    portions[0] = portions[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    if (portions.length == 1) return portions[0]
    return portions[0] + "." + portions[1]
  }


  regularFormat(num, precision) {
    if (num.mag < 0.0001) return (0).toFixed(precision)
    if (num.mag < 0.1 && precision !==0) precision = Math.max(precision, 4)
    return num.toStringWithDecimalPlaces(precision)
  }
}
