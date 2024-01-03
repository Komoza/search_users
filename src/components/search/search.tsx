import { useRef, useState } from 'react';
import { getUsers } from '../../api/api';
import './search.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchInfo, setUsers } from '../../store/actions/creators';
import { AppState } from '../../store/actions/types';

const sorting = ['По умолчанию', 'Репозитории (убыв)', 'Репозитории (возр)'];

export const Search = () => {
    const dispatch = useDispatch();
    const refInput = useRef<HTMLInputElement | null>(null);
    const [currSort, setCurrSort] = useState<string>(sorting[0]);

    const usersInfo = useSelector((state: AppState) => state.users);

    const handleClickSubmit = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        if (refInput.current)
            if (refInput.current.value) {
                getUsers(refInput.current.value, 1)
                    .then((data) => {
                        dispatch(setUsers(data));
                        dispatch(
                            setSearchInfo({
                                nowPage: 1,
                                searchQuery: refInput.current?.value as string,
                            })
                        );
                    })
                    .catch(() => {
                        console.error('ошбика');
                    });
            } else {
                dispatch(setUsers(null));
            }
    };

    const handleClickSorting = () => {
        const idx = sorting.indexOf(currSort);

        if (idx !== sorting.length - 1) {
            setCurrSort(sorting[idx + 1]);
        } else {
            setCurrSort(sorting[0]);
        }
    };

    return (
        <search>
            <form className="search">
                <input
                    ref={refInput}
                    name="username"
                    type="text"
                    className="search__data"
                    placeholder="Введите логин"
                />
                <button
                    onClick={(e) => handleClickSubmit(e)}
                    className="search__submit"
                >
                    Найти
                </button>
            </form>

            <div className="search__bottom-panel">
                <div className="search__sort">
                    <p className="search__sort-text">Сортировка:</p>
                    <button
                        onClick={handleClickSorting}
                        className="search__sort-button"
                    >
                        {currSort}
                    </button>
                </div>

                {usersInfo && (
                    <p className="search__total-count">
                        Результат поиска: {usersInfo.items.length} /{' '}
                        {usersInfo.total_count}
                    </p>
                )}
            </div>
        </search>
    );
};
