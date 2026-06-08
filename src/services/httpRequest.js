
// HttpRequest strategy

class HttpRequest {
    constructor(url, headers = {}, payload = null) {
        if (new.target === HttpRequest) {
            throw new Error("Cannot instantiate abstract class HttpRequest directly");
        }
        this.url = url;
        this.headers = headers;
        this.payload = payload;
    }

    async execute() {
        throw new Error("Abstract method 'execute' must be implemented");
    }
}

class GetRequest extends HttpRequest {
    async execute() {
        const response = await fetch(this.url, {
            method: "GET",
            headers: this.headers,
        });
        if (!response.ok) {
            throw new Error(`GET failed: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
}

class PostRequest extends HttpRequest {
    async execute() {
        const response = await fetch(this.url, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(this.payload),
        });
        if (!response.ok) {
            throw new Error(`POST failed: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
}

class PutRequest extends HttpRequest {
    async execute() {
        const response = await fetch(this.url, {
            method: "PUT",
            headers: this.headers,
            body: JSON.stringify(this.payload),
        });
        if (!response.ok) {
            throw new Error(`PUT failed: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
}

class DeleteRequest extends HttpRequest {
    async execute() {
        const response = await fetch(this.url, {
            method: "DELETE",
            headers: this.headers,
        });
        if (!response.ok) {
            throw new Error(`DELETE failed: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
}

class HttpRequestFactory {
    static create(method, url, headers = {}, payload = null) {
        switch (method.toUpperCase()) {
            case "GET":
                return new GetRequest(url, headers, payload);
            case "POST":
                return new PostRequest(url, headers, payload);
            case "PUT":
                return new PutRequest(url, headers, payload);
            case "DELETE":
                return new DeleteRequest(url, headers, payload);
            default:
                throw new Error(`Unsupported HTTP method: ${method}`);
        }
    }
}


(async () => {
    try {
        // GET
        const getUsers = HttpRequestFactory.create(
            "GET",
            "https://jsonplaceholder.typicode.com/users"
        );
        console.log('Get User',await getUsers.execute());

        // POST
        const newUser = HttpRequestFactory.create(
            "POST",
            "https://jsonplaceholder.typicode.com/users",
            { "Content-Type": "application/json" },
            { name: "Alice", email: "alice@example.com" }
        );
        console.log(await newUser.execute());

        // PUT
        const updateUser = HttpRequestFactory.create(
            "PUT",
            "https://jsonplaceholder.typicode.com/users/1",
            { "Content-Type": "application/json" },
            { name: "Updated Alice" }
        );
        console.log('Update user', await updateUser.execute());

        // DELETE
        const deleteUser = HttpRequestFactory.create(
            "DELETE",
            "https://jsonplaceholder.typicode.com/users/1"
        );
        console.log('Delete user', await deleteUser.execute());
    } catch (err) {
        console.error(err);
    }
})();
