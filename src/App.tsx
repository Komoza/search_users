import { UserList } from './components/list/list';
import { Search } from './components/search/search';

function App() {
    return (
        <div className="container">
            <header className="header">
                <Search />
            </header>
            <UserList />
        </div>
    );
}

export default App;
