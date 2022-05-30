// import { baseUrl } from "./consts";
const baseUrl = "http://localhost:3000";

// async function checkResponse(res) {
//   if (res.ok) {
//     const data = await res.json();
//     // console.log('check: ', data) 
//     return data;
//   } else {
//     return Promise.reject(res);
//   }
// }

const register = async (email, password, username) => {
  try {
    const res = await fetch(
      `${baseUrl}/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          name: username
        }),
      });
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      return Promise.reject(res);
    }
  } catch (error) {
    console.error(error.message);
  }
};

const login = async (email, password) => {
  try {
    const res = await fetch(
      `${baseUrl}/signin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password
        }),
      });
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      return Promise.reject(res);
    }
  } catch (error) {
    console.error(error.message);
  }
}

const getUserData = async () => {
  try {
    const res = await fetch(
      `${baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${localStorage.getItem('jwt')}`
      }
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      return Promise.reject(res);
    }
  } catch (error) {
    console.error(error.message);
  }
}

const saveArticle = async (article) => {
  try {
    const res = await fetch(
      `${baseUrl}/articles`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authorization": `Bearer ${localStorage.getItem('jwt')}`,
        },
        body: JSON.stringify({
            keyword: localStorage.getItem('keyWord'),
            title: article.title,
            text: article.text,
            date: article.date,
            source: article.source,
            link: article.link,
            image: article.image
        })
      });
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      return Promise.reject(res);
    }
  } catch (error) {
    console.error(error.message);
  }
}

const deleteArticle = async (article) => {
  try {
    const res = await fetch(
      `${baseUrl}/articles/${article._id}`, { //no sure about this one
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${localStorage.getItem('jwt')}`,
      }
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      return Promise.reject(res);
    }
  } catch (error) {
    console.error(error.message);
  }
}

const getArticlesFromDb = async () => {
  try {
    const res = await fetch(
      `${baseUrl}/articles`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${localStorage.getItem('jwt')}`
      }
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      return Promise.reject(res);
    }
  } catch (error) {
    console.error(error.message);
  }
}

export { register, login, getUserData, saveArticle, deleteArticle, getArticlesFromDb };