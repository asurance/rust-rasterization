use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;

use crate::mesh::Mesh;

#[wasm_bindgen]
pub struct Context {
    ctx: web_sys::CanvasRenderingContext2d,
    canvas_width: u32,
    canvas_height: u32,
}

#[wasm_bindgen]
impl Context {
    #[wasm_bindgen(constructor)]
    pub fn new(canvas: web_sys::HtmlCanvasElement) -> Context {
        let ctx = canvas
            .get_context("2d")
            .unwrap()
            .unwrap()
            .dyn_into::<web_sys::CanvasRenderingContext2d>()
            .unwrap();
        Context {
            ctx,
            canvas_width: canvas.width(),
            canvas_height: canvas.height(),
        }
    }

    #[wasm_bindgen(js_name=clearWithColor)]
    pub fn clear_with_color(&self, color: &str) {
        self.ctx.set_fill_style(&JsValue::from(color));
        self.ctx
            .fill_rect(0., 0., self.canvas_width as f64, self.canvas_height as f64);
    }

    #[wasm_bindgen(js_name=drawMesh)]
    pub fn draw_mesh(&self, value: &JsValue, color: &str) {
        let out = value.into_serde::<Mesh>().unwrap();
        self.ctx.set_fill_style(&JsValue::from(color));
        let position = out.position;
        if position.len() >= 4 {
            self.ctx
                .fill_rect(position[0], position[1], position[2], position[3]);
        } else {
            self.ctx
                .fill_rect(0., 0., self.canvas_width as f64, self.canvas_height as f64);
        }
    }
}
