import HomeLayout, {Props as HomeLayoutProps} from "components/templates/HomeLayout"

const TOPIC_STATE: HomeLayoutProps = {
	topicItems: [{
		title: {
			text: 'hoge',
		},
		image: {
			src: `${process.env.PUBLIC_URL}/logo.png`,
			alt: 'huga'
		}
	}]
}

const Home: React.FC = () => {
	return (
		<HomeLayout topicItems={TOPIC_STATE.topicItems}/>
	)
}

export default Home