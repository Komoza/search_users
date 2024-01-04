export const getUsers = async (
    username: string,
    page: number,
    sort: string | null,
    order: string | null
) => {
    const sorting = sort ? `&sort=${sort}` : '';
    const orderSort = order ? `&order=${order}` : '';
    return fetch(
        `https://api.github.com/search/users?q=${username}&page=${page}${sorting}${orderSort}`,
        {
            method: 'GET',
        }
    )
        .then((response) => response.json())
        .catch((error) => {
            throw new Error(error.message);
        });
};
