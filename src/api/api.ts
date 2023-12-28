export const getUsers = async (username: string) => {
    return fetch(`https://api.github.com/search/users?q=${username}`, {
        method: 'GET',
    })
        .then((response) => response.json())
        .catch((error) => {
            throw new Error(error.message);
        });
};
