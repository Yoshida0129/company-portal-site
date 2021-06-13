import { Link } from "react-router-dom"
import Image from 'components/atoms/Image'

interface Props {
	width ?: number,
	height ?: number
}

const Logo: React.FC<Props> = ({width=100, height=100}: Props) => {
  return (
		<Link to={'/'} >
			<Image
				src={`${process.env.PUBLIC_URL}/logo.png`}
				alt="site icon"
				width={width}
				height={height}
			/>
		</Link>
	)
}

export default Logo