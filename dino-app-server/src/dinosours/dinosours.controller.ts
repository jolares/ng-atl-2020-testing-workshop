import { Controller, Get, Req, Res, Param } from "@nestjs/common";
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

@Controller("dinosaurs")
export class DinosaursController {
  private dinoDb = {
    123: {
      id: "123",
      name: "Timmy Rexington",
      type: "Tyrannosaurus Rex",
      pictureUrl:
        "https://previews.123rf.com/images/rivansyam/rivansyam1703/rivansyam170300004/72901589-cartoon-t-rex-was-standing-with-two-legs.jpg",
      favoriteFood: ["Smaller Dinosaurs", "Chicago Style Pizza (Meat-lover)"],
      birthday: 67,
      hideRealName: false,
      bio: `I am one of the largest land carnivores of all time. I like to eat fellow dinosaurs, so I'm not very friendly. In my spare time, I like to practice touching my toes. Looking for someone that can scratch my back.`
    },
    456: {
      id: "456",
      name: "Tricia Wildleave",
      type: "Triceratops",
      pictureUrl: "someUrl",
      favoriteFood: ["Zucchini spaghetti", "Baked Kale"],
      hideRealName: false,
      birthday: 67,
      bio:
        "Only cool vegans or swipe left Plzzz. Oh btw add my Insta @TriciaRatops."
    },
    789: {
      id: "789",
      name: "Gabriel Espinoza",
      type: "Spinosaurus",
      pictureUrl: "someUrl",
      favoriteFood: ["Pterosaurs", "Seafood in general"],
      hideRealName: false,
      birthday: 67,
      bio: `New to the online thing. Strong sense of family. Love fishing. Only here to make friends.`
    },
    101: {
      id: "101",
      name: "Dippy Longneckerberger",
      type: "Diplodocus",
      pictureUrl: "someUrl",
      favoriteFood: ["Pterosaurs", "Seafood in general"],
      hideRealName: true,
      birthday: 67,
      bio: `I love to pick high hanging fruits.`
    },
    202: {
      id: "201",
      name: "Dippy Longneckerberger",
      type: "Diplodocus",
      pictureUrl: "someUrl",
      favoriteFood: ["Pterosaurs", "Seafood in general"],
      hideRealName: true,
      birthday: 67,
      bio: `Actor, Jurasic Park I, II, and Jurasic World.`
    }
  };

  @Get(":id/profile")
  async getProfile(
    @Param("id") id: string,
    @Req() req: Request
  ): Promise<Profile> {
    const { name, type, pictureUrl, favoriteFood, birthday } = this.dinoDb[id];
    return { id, name, type, pictureUrl, favoriteFood, birthday };
  }

  @Get(":id/bio")
  async getBio(@Param("id") id: string, @Req() req: Request): Promise<Bio> {
    const { bio } = this.dinoDb[id];
    return { bio };
  }
}
