import express from "express";
import { sql_con } from '../back-lib/db.js'

import moment from "moment-timezone";
const koreaTime = moment.tz('Asia/Seoul');

const apiRouter = express.Router();


apiRouter.post('/load_land_list', async (req, res, next) => {
    let status = true;
    let land_list = [];

    const body = req.body;
    const getLocation = body.getLocation;
    let addQuery = ""
    console.log(body);

    if(getLocation && getLocation != '전체'){
        addQuery = `WHERE ld_location = '${getLocation}'`
    }

    try {
        const loadLandListQuery = `SELECT * FROM land ${addQuery}`;
        console.log(loadLandListQuery);
        const loadLandList = await sql_con.promise().query(loadLandListQuery);
        land_list = loadLandList[0];
    } catch (error) {

    }

    res.json({ status, land_list })
})


apiRouter.use('/', async (req, res, next) => {
    let status = true;

    res.json({ status })
})



export { apiRouter }