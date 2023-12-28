import { useRef } from 'react';
import { getUsers } from '../../api/api';
import './search.css';
import { useDispatch } from 'react-redux';
import { setUsers } from '../../store/actions/creators';

export const Search = () => {
    const dispatch = useDispatch();
    const refInput = useRef<HTMLInputElement | null>(null);

    const handleClickSubmit = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        if (refInput.current)
            if (refInput.current.value) {
                getUsers(refInput.current.value)
                    .then((data) => {
                        console.log(data);
                        dispatch(setUsers(data));
                    })
                    .catch(() => {
                        console.error('ошбика');
                    });
            } else {
                dispatch(setUsers(null));
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
        </search>
    );
};
