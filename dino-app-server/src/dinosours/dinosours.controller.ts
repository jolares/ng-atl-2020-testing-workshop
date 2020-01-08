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
			bio: 'People tend to be scared of me, but I describe myself as a loving being. and can be very emotional at times. Seeking someone that can help me scratch my back'		
		},
		456: { 
			id: 456,
			name: 'Tricia Wildleave',
			type: 'Triceratops',
			pictureUrl: 'someUrl',
			favoriteFood: ['Zucchini spaghetti', 'Baked Kale'],
			hideRealName: false,
			bio: 'Only vegans or swipe left Plzzz. Add my Insta @TriciaRatops',
		},
		789: { 
			id: '789',
			name: 'Gabriel Espinoza',
			type: 'Spinosaurus',
			pictureUrl: 'someUrl',
			favoriteFood: ['Pterosaurs', 'Seafood in general'],
			hideRealName: false,
			bio: 'Strong sense of family. Love fishing. Only here to make friends.'		
		},
		101: {
			id: '101',
			name: 'Dippy Highfruitpacker',
			type: 'Diplodocus',
			pictureUrl: 'someUrl',
			favoriteFood: ['Pterosaurs', 'Seafood in general'],
			hideRealName: true,
			bio: 'Strong sense of family. Love fishing. Only here to make friends.'	
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
