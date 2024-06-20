
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';
export function App() {
    return (
        <section className='App'>
            <TwitterFollowCard username={'reactjs'} name={'React'} isFollowing={true} avatarURL={'https://unavatar.io/twitter/reactjs'} />
            <TwitterFollowCard username={'angular'} name={'Angular'} isFollowing={false} avatarURL={'https://unavatar.io/twitter/angular'} />
            <TwitterFollowCard username={'vuejs'} name={'Vue'} isFollowing={true} avatarURL={'https://unavatar.io/twitter/vuejs'} />
            <TwitterFollowCard username={'vegetta777'} name={'Vegetta777'} isFollowing={true} avatarURL={'https://unavatar.io/twitter/vegetta777'} />

        </section>

    )
}