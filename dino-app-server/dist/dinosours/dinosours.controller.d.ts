import { Request } from "express";
export interface Profile {
    id: string;
    name: string;
    type: string;
    pictureUrl: string;
    favoriteFood: string[];
    birthday: number;
}
export interface Bio {
    bio: string;
}
export declare class DinosaursController {
    private dinoDb;
    getProfile(id: string, req: Request): Promise<Profile>;
    getBio(id: string, req: Request): Promise<Bio>;
}
