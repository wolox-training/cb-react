import { api } from '../config/api';
import { endpoints } from '../constants/endpoints';

export const Request = {
  getBooks() {
    return api.get(endpoints.books)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        return error
      })
  },
  getBook(id) {
    return api.get(endpoints.books + `/${id}`)
      .then((response) => {
        return response
      })
      .catch((error) => {
        return error
      })
  }
}
