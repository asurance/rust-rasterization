use crate::texture::Texture;
use crate::util::s_function;

pub struct RenderObject<'a> {
    positions: [(f64, f64); 3],
    zs: [f64; 3],
    uvs: [(f64, f64); 3],
    texture: &'a Texture,
    sabc: f64,
    ratio0: f64,
    ratio1: f64,
    ratio2: f64,
}

impl<'a> RenderObject<'a> {
    pub fn new(
        positions: [(f64, f64); 3],
        uvs: [(f64, f64); 3],
        zs: [f64; 3],
        texture: &'a Texture,
    ) -> RenderObject<'a> {
        let sabc = s_function(positions[0], positions[1], positions[2]);
        RenderObject {
            positions,
            uvs,
            zs,
            texture,
            sabc,
            ratio0: 0.,
            ratio1: 0.,
            ratio2: 0.,
        }
    }

    pub fn active(&mut self, position: (f64, f64)) {
        self.ratio0 = s_function(position, self.positions[1], self.positions[2]) / self.sabc;
        self.ratio1 = s_function(self.positions[0], position, self.positions[2]) / self.sabc;
        self.ratio2 = s_function(self.positions[0], self.positions[1], position) / self.sabc;
    }

    pub fn z(&self) -> f64 {
        self.ratio0 * self.zs[0] + self.ratio1 * self.zs[1] + self.ratio2 * self.zs[2]
    }

    pub fn tex(&self) -> (u8, u8, u8, u8) {
        let uv = (
            self.ratio0 * self.uvs[0].0 + self.ratio1 * self.uvs[1].0 + self.ratio2 * self.uvs[2].0,
            self.ratio0 * self.uvs[0].1 + self.ratio1 * self.uvs[1].1 + self.ratio2 * self.uvs[2].1,
        );
        self.texture.texture_2d(uv)
    }
}
