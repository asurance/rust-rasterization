mod context;
mod mesh;

#[macro_use]
extern crate serde_derive;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

pub use context::Context;
