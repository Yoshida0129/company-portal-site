import Header from "components/organisms/Header"
import TopicList, {Props as TopicListProps} from "components/organisms/TopicList"

export interface Props extends TopicListProps {}

const HomeLayout: React.FC<Props> = ({topicItems}: Props) => (
	<div>
		<Header/>
		<div>
			<TopicList topicItems={topicItems}/>
		</div>
	</div>
)

export default HomeLayout