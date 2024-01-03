export const getUsers = async (username: string, page: number) => {
    return fetch(
        `https://api.github.com/search/users?q=${username}&page=${page}`,
        {
            method: 'GET',
        }
    )
        .then((response) => response.json())
        .catch((error) => {
            throw new Error(error.message);
        });
};
