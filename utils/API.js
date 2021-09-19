
export const callAPI = async ({ url }) => {
    return await (await fetch(url)).json();
};
