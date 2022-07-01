import { ClanMember, DonationsResult } from "../types";
import {
    LEADER_TAGS,
    OFFICIAL_ELDERS_TAGS,
    ADMIN_TAGS,
    MANAGER_TAGS,
} from "./constants";
import { getExpectedDonationsByClan } from "./donations";

export const calculateDonationsByDay = (
    members: ClanMember[],
    clanTag: string
): DonationsResult[] => {
    const tagsToExclude = [
        ...LEADER_TAGS,
        ...ADMIN_TAGS,
        ...OFFICIAL_ELDERS_TAGS,
        ...MANAGER_TAGS,
    ];

    const membersToCalculateDonations = members.filter(
        (member) => !tagsToExclude.includes(member.tag)
    );

    const expectedDonationsAmount = getExpectedDonationsByClan(clanTag);

    return membersToCalculateDonations.map((member) => ({
        tag: member.tag,
        name: member.name,
        donations: member.donations,
        donationsReceived: member.donationsReceived,
        expectedDonations: expectedDonationsAmount,
        isOutOfRatio: member.donations * 3 < member.donationsReceived,
        areDonationsFulfilled: member.donations >= expectedDonationsAmount,
    }))
};
