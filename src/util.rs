pub fn clamp_to_01(val: f64) -> f64 {
    match val {
        _ if val > 1. => 1.,
        _ if val < 0. => 0.,
        v => v,
    }
}
