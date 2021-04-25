import { HTTPS, HTTP } from '@constants/api';

/**
 * Change URL with HTTP to HTTPS
 * @param {String} url - url for change
 * @returns {String} - url with HTTPS
 */
export const changeHTTP = (url) => {
    const result = url ? url.replace(HTTP, HTTPS) : url;

    return result;
};

/**
 * Send Fetch request
 * @param {String} url - url from request
 * @returns {Promise} - Promise with request result
 */
export const getApiResource = async (url) => {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            console.error('Could not fetch. Status: ', res.status);
            return false;
        }

        return await res.json();
    } catch (error) {
        console.error('Could not fetch: ', error.message);
        return false;
    }
};

// getApiResource(`${SWAPI_ROOT}${SWAPI_PEOPLE}`).then((body) => console.log(body));

// (async () => {
//   const body = await getApiResource(`${SWAPI_ROOT}${SWAPI_PEOPLE}`);
//   console.log(body);
// })();

export const makeConcurrentRequest = async (url) => {
    const result = await Promise.all(
        url.map((res) => {
            return fetch(res).then((res) => res.json());
        }),
    );

    return result;
};
