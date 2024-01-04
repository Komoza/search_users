import { useState } from 'react';
import { User } from '../../../store/actions/types';
import './user.css';

interface UserComponentProps {
    user: User;
}

export const UserComponent: React.FC<UserComponentProps> = ({ user }) => {
    const [isOpenInfo, setIsOpenInfo] = useState<boolean>(false);

    const handleClickUser = () => {
        setIsOpenInfo(!isOpenInfo);
    };
    return (
        <div onClick={handleClickUser} className="user">
            <p className="user__text">{user.login}</p>
            {isOpenInfo && (
                <div className="user__info">
                    <img
                        className="user-avatar"
                        src={user.avatar_url}
                        alt="avatar"
                    />
                    <p
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                        className="user__link-text"
                    >
                        <a
                            className="user__link"
                            href={user.html_url}
                            target="blank"
                        >
                            Посмотреть на github
                        </a>
                    </p>
                </div>
            )}
        </div>
    );
};
