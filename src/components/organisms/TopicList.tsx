import TopicItem, {Props as TopicItemProps} from "components/molecules/TopicItem"

export interface Props {
	topicItems: TopicItemProps[]
}

const TopicList: React.FC<Props> = ({topicItems}: Props) => {
	return (
		<div style={{backgroundColor: '#CCCCCC'}}>
			{topicItems.map(({image, title}: TopicItemProps, index) => {
				return (
					<TopicItem image={image} title={title} key={index}/>
				)
			})}
		</div>
	)
}

export default TopicList
