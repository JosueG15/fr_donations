type Role = "coLeader" | "admin" | "member" | "leader";


export interface ClanMember {
    tag: string;
    name: string;
    role: Role;
    donations: number;
    donationsReceived: number;
}