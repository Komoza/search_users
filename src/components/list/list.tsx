import { useSelector } from 'react-redux';
import { AppState } from '../../store/actions/types';
import './list.css';

export const UserList = () => {
    const users = useSelector((state: AppState) => state.users);

    return (
        <section className="users">
            {users &&
                users.map((user, index) => (
                    <p className="user" key={index}>
                        <a href={user.html_url} target="blank">
                            {user.login}
                        </a>
                    </p>
                ))}
        </section>
    );
};
