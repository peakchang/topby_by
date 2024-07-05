

import axios from "axios";
import { back_api } from "$src/lib/const";
import moment from "moment-timezone";


export const load = async ({ fetch, url }) => {
    let land_list = [];
    const getLocation = url.searchParams.get('location')

    try {
        const res = await axios.post(`${back_api}/load_land_list`, { getLocation })
        if (res.data.status) {
            land_list = res.data.land_list;
        }
    } catch (error) {

    }

    return { land_list, getLocation }
}