use wasm_bindgen::prelude::*;
#[wasm_bindgen(typescript_custom_section)]
const MESH_DECLARATION: &'static str = r#"
export interface IMesh{
    position:number[];
    uv:number[];
    indice:number[];
}"#;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(typescript_type = "IMesh")]
    pub type IMesh;
}

#[derive(Deserialize)]
pub struct Mesh {
    pub position: Vec<f64>,
    pub uv: Vec<f64>,
    pub indice: Vec<u32>,
}

impl Mesh {
    pub fn transform(&mut self, width: f64, height: f64) {
        let count = self.position.len() / 3;
        for i in 0..count {
            self.position[i * 3] = (self.position[i * 3] + 1.) / 2. * width;
            self.position[i * 3 + 1] = (1. - self.position[i * 3 + 1]) / 2. * height;
        }
    }
}
