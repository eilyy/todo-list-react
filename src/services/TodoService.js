export default class TodoService {
    constructor() {
        this._url = "https://todo-list-react-db.herokuapp.com"
    }

    async getResource(url) {
        const res = await fetch(`${this._url}/${url}`);

        if(!res.ok) {
            throw new Error(`Unable to fetch ${this._url}/${url} with status ${res.status}`);
        }

        return await res.json();
    }

    async postTask(task) {
        const res = await fetch(`${this._url}/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        });

        if(!res.ok) {
            throw new Error(`Unable to post to ${this._url}/tasks with status ${res.status}`);
        }

        return await res.json();
    }

    async deleteTask(taskId) {
        const res = await fetch(`${this._url}/tasks/${taskId}`, {method: 'DELETE'});

        if(!res.ok) {
            throw new Error(`Unable to delete ${this._url}/tasks/${taskId} with status ${res.status}`);
        }

        return await res.json();
    }

    async updateTask(taskId, data) {
        const res = await fetch(`${this._url}/tasks/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if(!res.ok) {
            throw new Error(`Unable to update ${this._url}/tasks/${taskId} with status ${res.status}`);
        }

        return await res.json();
    }

    async getTasks() {
        return await this.getResource('tasks')
    }
}