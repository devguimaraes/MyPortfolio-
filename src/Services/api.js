import axios from "axios";

const api = axios.create({
	baseURL: "https://api.github.com/users/devguimaraes/starred"
})

const apiUser = axios.create({
	baseURL: "https://api.github.com/users/devguimaraes"
})

const Apis = {
	api,
	apiUser
}
export default Apis
