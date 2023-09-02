import profile from '../assets/profile.jpg'

export const Home = () => {
    return <div className="content">
        <div className='profile-pic'>
            <img src={profile} />
        </div>
    </div>
}