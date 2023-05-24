import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <main className = 'homePage'>
            <h1>
                Get the party started
            </h1>
            <div className='homePage__content'>
                <p>
                    Make your next event unforgettable with special custom cocktails tailored to your taste!
                </p>
                <Link to='/menu'>Go to Menu</Link>
            </div>
        </main>
    )
};

export default HomePage;