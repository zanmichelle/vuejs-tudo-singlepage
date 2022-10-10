import axios from 'axios';

//url
const url = 'http://localhost/index.php/todo/';

class requestHandler {
    static list() {
        // get list of all todos
        console.log('Connectiong to api endpoint')
        return new Promise(async (resolve, reject) => {
            try {
              const res = await axios.get(`${url}list`);
              const data = res.data;
              resolve(data);
            } catch (err) {
              reject(err);
            }
          });
    }

    // post new todo
    static postItem(item) {
        return axios.post(url, {
            item,
          });
    }

    //update todo - add param incase its just marked as done
    static updateItem(item,done = false) {

    }

    // delete item
    static deleteItem(id) {
        return axios.delete(`${url}?id=${id}`);
    }

}

export default requestHandler;