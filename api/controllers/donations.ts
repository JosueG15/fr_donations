import { Request, Response, NextFunction } from "express";
import { AxiosResponse } from "axios";
import { ClanMember } from "../types";
import { calculateDonationsByDay } from "../helpers/utils";

import axios from "../helpers/axiosConfig";


const calculateDonations = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let clanTag: string = `%23${req.params.tag}`;

        let result: AxiosResponse = await axios.get(`/clans/${clanTag}/members`);

        let clanMembers: [ClanMember] = result.data.items;

        return res.status(200).json({
            calculationsResults: calculateDonationsByDay(clanMembers, clanTag),
        });
    } catch (error) {
        return res.status(500).json({
            error,
        });
    }
};

const methods = { calculateDonations };

export default methods;
