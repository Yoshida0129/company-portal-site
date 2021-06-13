import Image, {Props as ImageProps} from 'components/atoms/Image'
import Text, {Props as TextProps} from 'components/atoms/Text'

export interface Props {
	image: ImageProps,
	title: TextProps,
}

const TopicItem: React.FC<Props> = ({image, title}: Props) => {
	return (
		<div>
			<Image src={image.src} alt={image.alt}/>
			<Text text={title.text}/>
		</div>
	)
}

export default TopicItem
