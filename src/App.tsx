import { UserList } from './components/list/list';
import { Search } from './components/search/search';

function App() {
    return (
        <div className="container">
            <div className="wrapper">
                <header className="header">
                    <Search />
                </header>
                <UserList />
            </div>
        </div>
    );
}

export default App;
