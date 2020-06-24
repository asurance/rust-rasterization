pub fn clamp_to_01(val: f64) -> f64 {
    match val {
        _ if val > 1. => 1.,
        _ if val < 0. => 0.,
        v => v,
    }
}

pub fn lerp(from: f64, to: f64, start: f64, end: f64, target: f64) -> f64 {
    let ratio = (target - start) / (end - start);
    from + (to - from) * ratio
}

pub fn SFunction(a: (f64, f64), b: (f64, f64), c: (f64, f64)) -> f64 {
    a.0 * b.1 + b.0 * c.1 + c.0 * a.1 - a.0 * c.1 - b.0 * a.1 - c.0 * b.1
}
