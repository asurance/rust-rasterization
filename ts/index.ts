const canvas = document.createElement('canvas')
canvas.width = 512
canvas.height = 512
document.body.appendChild(canvas)
import('../pkg/index').then(module => {
    const ctx = new module.Context(canvas)
    ctx.clearWithColor('#00FF00')
    ctx.drawMesh({ position: [0, 0, 0, 256, 256, 128] }, '#FF0000')
    ctx.free()
}).catch(console.error)