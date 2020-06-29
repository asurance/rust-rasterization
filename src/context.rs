use crate::mesh::{IMesh, Mesh};
use crate::util::lerp;
use wasm_bindgen::prelude::*;
use wasm_bindgen::Clamped;
use wasm_bindgen::JsCast;
// use web_sys::console;
use web_sys::ImageData;

#[wasm_bindgen]
pub struct Context {
    ctx: web_sys::CanvasRenderingContext2d,
    canvas_width: u32,
    canvas_height: u32,
    render_buffer: Vec<u8>,
    depth_buffer: Vec<f64>,
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
            render_buffer: vec![0; (canvas.width() * canvas.height() * 4) as usize],
            depth_buffer: vec![0.; (canvas.width() * canvas.height()) as usize],
        }
    }

    #[wasm_bindgen(js_name=clearColor)]
    pub fn clear_color(&mut self, color: u32) {
        let red = (color >> 16) as u8;
        let green = ((color >> 8) & 0xFF) as u8;
        let blue = (color & 0xFF) as u8;
        for row in 0..self.canvas_height {
            for col in 0..self.canvas_width {
                self.render_buffer[((row * self.canvas_width + col) * 4) as usize] = red;
                self.render_buffer[((row * self.canvas_width + col) * 4 + 1) as usize] = green;
                self.render_buffer[((row * self.canvas_width + col) * 4 + 2) as usize] = blue;
                self.render_buffer[((row * self.canvas_width + col) * 4 + 3) as usize] = 255;
            }
        }
    }

    #[wasm_bindgen(js_name=clearDepth)]
    pub fn clear_depth(&mut self, depth: f64) {
        for row in 0..self.canvas_height {
            for col in 0..self.canvas_width {
                self.depth_buffer[(row * self.canvas_width + col) as usize] = depth;
            }
        }
    }

    #[wasm_bindgen(js_name=drawMesh)]
    pub fn draw_mesh(&mut self, value: IMesh) {
        let value = value.into_serde::<Mesh>().unwrap();
        let position = value.position;
        if position.len() >= 6 {
            self.draw_triangle([
                (position[0], position[1]),
                (position[2], position[3]),
                (position[4], position[5]),
            ])
        }
    }

    #[wasm_bindgen(js_name=finish)]
    pub fn finish(&mut self) -> Result<(), JsValue> {
        let data = ImageData::new_with_u8_clamped_array_and_sh(
            Clamped(&mut self.render_buffer),
            self.canvas_width,
            self.canvas_height,
        )?;
        self.ctx.put_image_data(&data, 0., 0.)
    }

    fn draw_triangle(&mut self, points: [(f64, f64); 3]) {
        for i in 0..3 {
            if points[i].1 == points[(i + 1) % 3].1 {
                self.draw_horizen_triangle(
                    points[(i + 2) % 3],
                    points[i].0,
                    points[(i + 1) % 3].0,
                    points[i].1,
                );
                return;
            }
        }
        let mut max = points[0].1;
        let mut maxi = 0;
        let mut min = points[0].1;
        let mut mini = 0;
        for i in 1..3 {
            if max < points[i].1 {
                max = points[i].1;
                maxi = i;
            }
            if min > points[i].1 {
                min = points[i].1;
                mini = i;
            }
        }
        let midi = 3 - maxi - mini;
        let mid = lerp(
            points[mini].0,
            points[maxi].0,
            points[mini].1,
            points[maxi].1,
            points[midi].1,
        );
        self.draw_horizen_triangle(points[mini], points[midi].0, mid, points[midi].1);
        self.draw_horizen_triangle(points[maxi], points[midi].0, mid, points[midi].1);
    }

    fn draw_horizen_triangle(&mut self, point: (f64, f64), x1: f64, x2: f64, y: f64) {
        let point_x = (point.0 + 0.5) as i32;
        let point_y = (point.1 + 0.5) as i32;
        let line_y = (y + 0.5) as i32;
        if point_x >= 0
            && point_y >= 0
            && (point_x as u32) < self.canvas_width
            && (point_y as u32) < self.canvas_height
        {
            self.draw_point(point_x as u32, point_y as u32)
        }
        let (start, end) = if point_y < line_y {
            (point_y + 1, line_y)
        } else {
            (line_y, point_y - 1)
        };
        let mut i = if start > 0 { start as u32 } else { 0 };
        while (i as i32) < end && i < self.canvas_height {
            self.draw_horizenline(
                lerp(point.0, x1, point.1, y, i as f64),
                lerp(point.0, x2, point.1, y, i as f64),
                i,
            );
            i += 1
        }
    }

    fn draw_horizenline(&mut self, x1: f64, x2: f64, y: u32) {
        let (start, end) = if x1 < x2 {
            (x1 as i32, x2 as i32)
        } else {
            (x2 as i32, x1 as i32)
        };
        let mut i = if start > 0 { start as u32 } else { 0 };
        while (i as i32) < end + 1 && i < self.canvas_width {
            self.draw_point(i, y);
            i += 1;
        }
    }

    fn draw_point(&mut self, col: u32, row: u32) {
        self.render_buffer[((row * self.canvas_width + col) * 4) as usize] = 0;
        self.render_buffer[((row * self.canvas_width + col) * 4 + 1) as usize] = 0;
        self.render_buffer[((row * self.canvas_width + col) * 4 + 2) as usize] = 0;
        self.render_buffer[((row * self.canvas_width + col) * 4 + 3) as usize] = 255;
    }
}
