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
            getUsers(
                searchInfo.searchQuery,
                searchInfo.nowPage + 1,
                searchInfo.sort,
                searchInfo.order
            )
                .then((data) => {
                    dispatch(
                        setUsers({
                            ...data,
                            items: [...users.items, ...data.items],
                        })
                    );
                    dispatch(
                        setSearchInfo({
                            ...searchInfo,
                            nowPage: searchInfo.nowPage + 1,
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
            {users && users.items &&
                users.items.map((user) => (
                    <UserComponent key={user.id} user={user} />
                ))}

            {users && users.items && users.total_count !== users.items.length && (
                <button onClick={handleClickLoadMore} className="users__more">
                    Загрузить еще
                </button>
            )}
        </section>
    );
};
