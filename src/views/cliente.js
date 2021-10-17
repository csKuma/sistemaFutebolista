import axios from "axios";
const client =axios.create({
    baseURL:"https://api-football-standings.azharimm.site"
})
export default client