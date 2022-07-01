import { FR5_DONATIONS, FR5_TAG } from "./constants";

const getWeekOfTheMonth = (): number => {
    const d = new Date();
    const date = d.getDate();
    const day = d.getDay();
    return Math.ceil((date - 1 - day) / 7) + 1;
};

export const getExpectedDonationsByClan = (clanTag: string): number => {
    const weekOfTheMonth = getWeekOfTheMonth();
    switch (clanTag) {
        case FR5_TAG:
            return FR5_DONATIONS * weekOfTheMonth;

        default:
            return FR5_DONATIONS * weekOfTheMonth;
    }
};
