import { useSelector } from 'react-redux';
import { AppState } from '../../store/actions/types';
import './list.css';
import { UserComponent } from './components/user';

export const UserList = () => {
    const users = useSelector((state: AppState) => state.users);

    return (
        <section className="users">
            {users &&
                users.items.map((user, index) => (
                    <UserComponent key={index} user={user} />
                ))}

            {users && users.total_count !== users.items.length && (
                <button className="users__more">Загрузить еще</button>
            )}
        </section>
    );
};
