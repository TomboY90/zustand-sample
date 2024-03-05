import axios from "axios";

export class TodoApi {
  static BASE_URL = 'https://jsonplaceholder.typicode.com';

  static getAllTodoList() {
    return axios.get(`${this.BASE_URL}/todos`);
  }

  static getTodoItem(todoId) {
    return axios.get(`${this.BASE_URL}/todos/${todoId}`)
  }
}
