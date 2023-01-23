export const getRepos = async () => {
    const response = await fetch("https://api.github.com/users/pecet3/repos");

    if (!response.ok) {
        throw new Error(response.text);
    }

    return await response.json();

};