import { apiKey, apiUrl, apiUrlTweaked } from "./consts";

const getArticlesFromApi = async (q) => {
  let date = new Date();
  const [year, month, day] = [date.getFullYear(), date.getMonth(), date.getDate()];
  const response = await fetch(
    `${apiUrlTweaked}/v2/everything?q=${q}&from=${year}-${month + 1}-${day}&to=${year}-${month + 1}-${day - 7}&pageSize=100&language=en&apiKey=${apiKey}`,
    {
      method: "GET",
    }
  );
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    return Promise.reject(response);
  }
}

export { getArticlesFromApi };