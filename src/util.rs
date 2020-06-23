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
