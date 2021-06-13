export interface Props {
	text: string
}

const Text: React.FC<Props> = ({text}: Props) => {
	return (
		<p>{text}</p>
	)
}

export default Text
