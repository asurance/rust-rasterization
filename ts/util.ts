export function LoadImage(url: string): Promise<HTMLImageElement> {
    return new Promise<HTMLImageElement>(resolve => {
        const image = new Image()
        image.src = url
        image.onload = () => resolve(image)
    })
}

export function GetImageData(image: HTMLImageElement): ImageData {
    const canvas = document.createElement('canvas')
    canvas.width = image.width
    canvas.height = image.height
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const ctx = canvas.getContext('2d')!
    ctx.drawImage(image, 0, 0)
    return ctx.getImageData(0, 0, image.width, image.height)
}