// * Axios adalah library JavaScript yang digunakan untuk melakukan HTTP Request ke dalam suatu server untuk melakukan manipulasi data seperti GET, POST, PUT, DELETE. Secara default, Axios menggunakan callback response berupa "promise".

// Di projek ini, axios digunakan untuk mendapatkan data dari REST API yang sudah dibuat sebelumnya di Laravel (backend-donasi)
import axios from "axios";

const Api = axios.create({
  // Default endpoint API
  baseURL: "http://localhost:8000/api", // <-- Alamat baseURL dari project Laravel (backend-donasi)
});

export default Api;
