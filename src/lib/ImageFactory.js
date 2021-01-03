export const ImageFactory = (name, svg) => {
	const image = new Image(20,20)
	image.src = 'data:image/svg+xml;charset=utf-8;base64,' + btoa(svg);
	return [name, image]
}