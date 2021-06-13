export interface Props {
	src: string,
	alt: string,
	width ?: number,
	height ?: number
}

const Image: React.FC<Props> = ({src, alt, width, height} : Props) => {
	return (
		<img
			src={src}
			alt={alt}
			width={width}
			height={height}
		/>
	)
}

export default Image
