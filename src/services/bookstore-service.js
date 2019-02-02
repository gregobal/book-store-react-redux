
export default class BookStoreService {

  _url = 'https://neto-api.herokuapp.com/book/';

  getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  getBooks = async () => {
    const res = await this.getResource(this._url);
    return res.map(this._transformList);
  };

  _transformList = list => {
    return {
      id: list.id,
      title: list.title,
      author: list.author.name,
      cover: list.cover.small,
      price: list.price
    }
  }
}
