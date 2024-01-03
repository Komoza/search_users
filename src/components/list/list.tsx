import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/actions/types';
import './list.css';
import { UserComponent } from './components/user';
import { getUsers } from '../../api/api';
import { setSearchInfo, setUsers } from '../../store/actions/creators';

export const UserList = () => {
    const dispatch = useDispatch();

    const users = useSelector((state: AppState) => state.users);
    const searchInfo = useSelector((state: AppState) => state.searchInfo);

    const handleClickLoadMore = () => {
        if (searchInfo && users) {
            getUsers(searchInfo.searchQuery, searchInfo.nowPage + 1)
                .then((data) => {
                    dispatch(
                        setUsers({
                            ...data,
                            items: [...users.items, ...data.items],
                        })
                    );
                    dispatch(
                        setSearchInfo({
                            nowPage: searchInfo.nowPage + 1,
                            searchQuery: searchInfo.searchQuery,
                        })
                    );
                })
                .catch(() => {
                    console.error('ошбика');
                });
        }
    };

    return (
        <section className="users">
            {users &&
                users.items.map((user, index) => (
                    <UserComponent key={index} user={user} />
                ))}

            {users && users.total_count !== users.items.length && (
                <button onClick={handleClickLoadMore} className="users__more">
                    Загрузить еще
                </button>
            )}
        </section>
    );
};
