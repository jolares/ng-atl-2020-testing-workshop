import { Controller, Get, Req, Res, Param } from '@nestjs/common';
import { Request } from 'express';


export interface Profile { 
	id: string,
	name: string,
	type: string,
	pictureUrl: string,
	favoriteFood: string[]				
}

export interface Bio {
	bio: string;
}

@Controller('dinosours')
export class DinosoursController {

	private dinoDb = {
		123: { 
			id: '123',
			name: 'Timmy Rexington',
			type: 'Tyrannosaurus',
			pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Tyrannosaurus_Rex_Holotype.jpg',
			favoriteFood: ['Smaller Dinosours', 'Chicago Style Pizza (Meat-lover)'],
			hideRealName: false,
			bio: `I am one of the largest land carnivores of all time. I like to eat fellow dinosaurs, so I'm not very friendly. In my spare time, I like to practice touching my toes. Looking for someone that can scratch my back.`
		},
		456: { 
			id: 456,
			name: 'Tricia Wildleave',
			type: 'Triceratops',
			pictureUrl: 'someUrl',
			favoriteFood: ['Zucchini spaghetti', 'Baked Kale'],
			hideRealName: false,
			bio: 'Only cool vegans or swipe left Plzzz. Oh btw add my Insta @TriciaRatops.',
		},
		789: { 
			id: '789',
			name: 'Gabriel Espinoza',
			type: 'Spinosaurus',
			pictureUrl: 'someUrl',
			favoriteFood: ['Pterosaurs', 'Seafood in general'],
			hideRealName: false,
			bio: `New to the online thing. Strong sense of family. Love fishing. Only here to make friends.`	
		},
		101: {
			id: '101',
			name: 'Dippy Longneckerberger',
			type: 'Diplodocus',
			pictureUrl: 'someUrl',
			favoriteFood: ['Pterosaurs', 'Seafood in general'],
			hideRealName: true,
			bio: `I love to pick high hanging fruits.`	
		},
		202: {
			id: '101',
			name: 'Dippy Longneckerberger',
			type: 'Diplodocus',
			pictureUrl: 'someUrl',
			favoriteFood: ['Pterosaurs', 'Seafood in general'],
			hideRealName: true,
			bio: `Actor, Jurasic Park I, II, and Jurasic World.`	
		}
	};

	@Get(':id/profile')
	async getProfile(@Param('id') id: string, @Req() req: Request): Promise<Profile> {
		const { name, type, pictureUrl, favoriteFood } = this.dinoDb[id];
		return { id, name, type, pictureUrl, favoriteFood };
	}

	@Get(':id/bio')
	async getBio(@Param('id') id: string, @Req() req: Request): Promise<Bio> {
		const { bio } = this.dinoDb[id];
		return { bio };
	}
}
