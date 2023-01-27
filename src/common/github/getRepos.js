const link = "https://api.github.com/users/pecet3/repos"

export const getRepos = async () => {
    const response = await fetch(link);

    if (!response.ok) {
        throw new Error(response.text);
    }

    return await response.json();

};