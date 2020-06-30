import smile from './Smile.png'
import { LoadImage, GetImageData } from './util'

const canvas = document.createElement('canvas')
canvas.width = 512
canvas.height = 512
document.body.appendChild(canvas)

Promise.all([import('../pkg/index'), LoadImage(smile)]).then(([module, image]) => {
    const imageData = GetImageData(image)
    const ctx = new module.Context(canvas)
    ctx.clearColor(0x000000)
    ctx.clearDepth(1)
    ctx.drawMesh({ position: [-1, -1, 0.1, -1, 1, 0.1, 1, -1, 0.1, 1, 1, 0.1], uv: [0, 0, 0, 1, 1, 0, 1, 1], indice: [0, 1, 2, 1, 3, 2] }, imageData)
    ctx.finish()
    ctx.free()
}).catch(console.error)