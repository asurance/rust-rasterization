pub struct Vector {
    value: [f64; 3],
}

impl Vector {
    pub fn SFunction(a: &Vector, b: &Vector, c: &Vector) -> f64 {
        a.get_x() * b.get_y() + b.get_x() * c.get_y() + c.get_x() * a.get_y()
            - a.get_x() * c.get_y()
            - b.get_x() * a.get_y()
            - c.get_x() * b.get_y()
    }
    pub fn interpolationByIndex(a: &Vector, b: &Vector, index: usize, target: f64) -> Vector {
        let ratio = (target - a.value[index]) / (b.value[index] - a.value[index]);
        let mut out = Vector {
            value: [0., 0., 0.],
        };
        for i in 0..3 {
            if i == index {
                out.value[index] = target
            } else {
                out.value[index] = a.value[index] + (b.value[index] - a.value[index]) * ratio
            }
        }
        out
    }
    pub fn get_x(&self) -> f64 {
        self.value[0]
    }
    pub fn set_x(&mut self, x: f64) {
        self.value[0] = x;
    }
    pub fn get_y(&self) -> f64 {
        self.value[1]
    }
    pub fn set_y(&mut self, y: f64) {
        self.value[1] = y;
    }
    pub fn get_z(&self) -> f64 {
        self.value[2]
    }
    pub fn set_z(&mut self, z: f64) {
        self.value[2] = z;
    }
}
