
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';
export function App() {

    return (
        <section className='App'>
            <TwitterFollowCard userName={'reactjs'} name={'React'} initialIsFollowing  avatarURL={'https://unavatar.io/twitter/reactjs'} />
            <TwitterFollowCard userName={'angular'} name={'Angular'} initialIsFollowing={false} avatarURL={'https://unavatar.io/twitter/angular'} />
            <TwitterFollowCard userName={'vuejs'} name={'Vue'} initialIsFollowing avatarURL={'https://unavatar.io/twitter/vuejs'} />
            <TwitterFollowCard userName={'vegetta777'} name={'Vegetta777'} initialIsFollowing avatarURL={'https://unavatar.io/twitter/vegetta777'} />
        </section>

    )
}