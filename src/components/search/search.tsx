import { useRef, useState } from 'react';
import { getUsers } from '../../api/api';
import './search.css';
import { useDispatch } from 'react-redux';
import { setUsers } from '../../store/actions/creators';

const sorting = ['По умолчанию', 'Репозитории (убыв)', 'Репозитории (возр)'];

export const Search = () => {
    const dispatch = useDispatch();
    const refInput = useRef<HTMLInputElement | null>(null);
    const [currSort, setCurrSort] = useState<string>(sorting[0]);

    const handleClickSubmit = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        if (refInput.current)
            if (refInput.current.value) {
                getUsers(refInput.current.value)
                    .then((data) => {
                        dispatch(setUsers(data));
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
            <div className="search__sort">
                <p className="search__sort-text">Сортировка:</p>
                <button
                    onClick={handleClickSorting}
                    className="search__sort-button"
                >
                    {currSort}
                </button>
            </div>
        </search>
    );
};
