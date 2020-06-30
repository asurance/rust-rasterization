use crate::util;

pub struct Texture {
    width: u32,
    height: u32,
    data: wasm_bindgen::Clamped<Vec<u8>>,
}

impl Texture {
    pub fn new(imagedata: web_sys::ImageData) -> Texture {
        Texture {
            width: imagedata.width(),
            height: imagedata.height(),
            data: imagedata.data(),
        }
    }

    pub fn texture_2d(&self, uv: (f64, f64)) -> (u8, u8, u8, u8) {
        let u = (util::clamp_to_01(uv.0) * ((self.width - 1) as f64) + 0.5) as u32;
        let v = (util::clamp_to_01(1. - uv.1) * ((self.height - 1) as f64) + 0.5) as u32;
        let i = (v * self.width + u) as usize * 4;
        (
            self.data[i],
            self.data[i + 1],
            self.data[i + 2],
            self.data[i + 3],
        )
    }
}
