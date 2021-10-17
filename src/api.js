import axios from "axios";

const Api = axios.create({
    baseURL:"https://api-football-standings.azharimm.site"
})

export default Api
