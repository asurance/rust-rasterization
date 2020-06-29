import smile from './Smile.png'
import { LoadImage, GetImageData } from './util'

const canvas = document.createElement('canvas')
canvas.width = 512
canvas.height = 512
document.body.appendChild(canvas)

Promise.all([import('../pkg/index'), LoadImage(smile)]).then(([module, image]) => {
    const imageData = GetImageData(image)
    const ctx = new module.Context(canvas)
    ctx.clearColor(0x00FF00)
    ctx.drawMesh({ position: [0, 0, 0, 512, 512, 0], uv: [0, 0, 0, 1, 1, 0] }, imageData)
    ctx.finish()
    ctx.free()
}).catch(console.error)