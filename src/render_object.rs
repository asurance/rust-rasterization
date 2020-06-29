use crate::texture::Texture;
use crate::util::s_function;

pub struct RenderObject<'a> {
    positions: [(f64, f64); 3],
    uvs: [(f64, f64); 3],
    texture: &'a Texture,
    sabc: f64,
}

impl<'a> RenderObject<'a> {
    pub fn new(
        positions: [(f64, f64); 3],
        uvs: [(f64, f64); 3],
        texture: &'a Texture,
    ) -> RenderObject<'a> {
        let sabc = s_function(positions[0], positions[1], positions[2]);
        RenderObject {
            positions,
            uvs,
            texture,
            sabc,
        }
    }

    pub fn tex(&self, position: (f64, f64)) -> (u8, u8, u8, u8) {
        let ratio0 = s_function(position, self.positions[1], self.positions[2]) / self.sabc;
        let ratio1 = s_function(self.positions[0], position, self.positions[2]) / self.sabc;
        let ratio2 = s_function(self.positions[0], self.positions[1], position) / self.sabc;
        let uv = (
            ratio0 * self.uvs[0].0 + ratio1 * self.uvs[1].0 + ratio2 * self.uvs[2].0,
            ratio0 * self.uvs[0].1 + ratio1 * self.uvs[1].1 + ratio2 * self.uvs[2].1,
        );
        self.texture.texture_2d(uv)
    }
}
