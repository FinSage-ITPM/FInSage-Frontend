const API_URL = "http://127.0.0.1:8000/auth"; // Adjust if needed

export async function loginUser(email, password) {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.status === 401) {
            throw new Error("Invalid credentials");
        }
        if (response.status === 403) {
            throw new Error("Account is locked due to multiple failed attempts");
        }
        if (!response.ok) {
            throw new Error(data.detail || "Login failed");
        }

        localStorage.setItem("token", data.access_token); // Store JWT token
        return data;
    } catch (error) {
        console.error("Login Error:", error.message);
        throw error;
    }
}
