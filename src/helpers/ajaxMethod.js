const { REACT_APP_API_KEY } = process.env;

const ajaxMethod = async (url, method, body = '', file = false) => {
  let loading = true;
  let typeMethod;
  if (method === "GET" || method === "DELETE") {
    typeMethod = {
      method: method,
      headers: { "apikey": "DVhkLXVN9BDJj9wUDTd4heqx6Tfmmcr4DCwoGeP4" }
    };
  } else if (method === 'POST' || method === 'PUT') {
    if (file) {
      typeMethod = {
        method: method,
        body: body
      };
    } else {
      typeMethod = {
        method: method,
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': REACT_APP_API_KEY
        }
      };
    };
  };
  const response = await fetch(url, typeMethod);
  const data = await response.json();
  loading = false;
  return { data, loading };
};

export default ajaxMethod;