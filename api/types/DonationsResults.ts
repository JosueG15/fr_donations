
export interface DonationsResult {
    tag: string;
    name: string;
    donations: number;
    donationsReceived: number;
    expectedDonations: number;
    isOutOfRatio: boolean;
    areDonationsFulfilled: boolean;
}