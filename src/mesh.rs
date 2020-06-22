use wasm_bindgen::prelude::*;
#[wasm_bindgen(typescript_custom_section)]
const MESH_DECLARATION: &'static str = r#"
export interface IMesh{
    position:number[];
}"#;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(typescript_type = "IMesh")]
    pub type IMesh;
}

#[derive(Deserialize)]
pub struct Mesh {
    pub position: Vec<f64>,
}
