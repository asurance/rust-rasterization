const canvas = document.createElement('canvas')
canvas.width = 512
canvas.height = 512
document.body.appendChild(canvas)
import('../pkg/index').then(module => {
    const ctx = new module.Context(canvas)
    ctx.clearColor(0x00FF00)
    ctx.drawMesh({ position: [-1, -1, 128, 512, 512, 128] })
    ctx.finish()
    ctx.free()
}).catch(console.error)