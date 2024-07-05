

import axios from "axios";
import { back_api } from "$src/lib/const";
import moment from "moment-timezone";


export const load = async ({ fetch, url }) => {
    let testVal = ""
    let land_list = [];

    try {
        const res = await axios.get(`${back_api}/load_land_list`)
        if (res.data.status) {
            land_list = res.data.land_list;
        }
    } catch (error) {

    }

    return { land_list }
}