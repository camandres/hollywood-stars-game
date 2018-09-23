import { chain, sample } from 'lodash';

export const actors = [
	{
		name: 'Leonardo Dicaprio',
		imageUrl: 'images/actors/01.jpg',
		imageSource: 'IMDB Commons',
		movies: [ 'Shutter Island','Revolutionary Road','Poison Ivy' ]
	},
	{
		name: 'Tom Cruise',
		imageUrl: 'images/actors/02.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Edge of tomorrow','Legend','Rain Man']
	},
	{
		name: 'John Travolta',
		imageUrl: 'images/actors/03.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Gotti','HairSpray','The Thin Red Line','Lonely hearts']
	},
	{
		name: 'Arnold Swatzenegger',
		imageUrl: 'images/actors/04.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Eraser', 'The kid and I','Cry Macho','The Villain']
	},
	{
		name: 'Silvester Stallone',
		imageUrl: 'images/actors/05.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Escape Plan', 'Driven','Daylight','Antz']
	},
	{
		name: 'Brad Pit',
		imageUrl: 'images/actors/06.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Babel', 'The favor','The Lost City of Z']
	},
	{
		name: 'Kate Winslet',
		imageUrl: 'images/actors/07.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Pride','Faeres','Enigma','Hamlet']
	},
	{
		name: 'Al Pacino',
		imageUrl: 'images/actors/08.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Revolution', 'Me, Natalie','City Hall','Manglehorn']
	},
	{
		name: 'Christian Bale',
		imageUrl: 'images/actors/09.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Anastacia: The Mystery', 'Ford v Ferrari','Henry V','Mowgly']
	},
	{
		name: 'Morgan Freeman',
		imageUrl: 'images/actors/10.jpg',
		imageSource: 'IMDB Commons',
		movies: ['London has Fallen', 'Amistad','Outbreak','Nurse Betty']
	},
	{
		name: 'Keanu Reves',
		imageUrl: 'images/actors/11.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Parenthood', 'Hardball','To the Bone','The Private Lives of Pippa Lee']
	},
	{
		name: 'Nicolas Cage',
		imageUrl: 'images/actors/12.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Birdy', 'Kiss of Death','The Weather','Windtalkers','The trust']
	},
	{
		name: 'Hugh Jackman',
		imageUrl: 'images/actors/13.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Prisoners','Chappie','Movie 43','The Rat Tamer']
	},
	{
		name: 'Angelina Jolie',
		imageUrl: 'images/actors/14.jpg',
		imageSource: 'IMDB Commons',
		movies: ['The Fever','Kung Fu Panda Holiday','Alice and Viril']
	},
	{
		name: 'Charlize Theron',
		imageUrl: 'images/actors/15.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Trial and Error','Max Max','Celebrity','Astro Boy','East of Havana']
	},
	{
		name: 'Tom Hanks',
		imageUrl: 'images/actors/16.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Nothing in common','Dragnet','The Burbs','Magnificent Desolation']
	},
	{
		name: 'Jony Deep',
		imageUrl: 'images/actors/17.jpg',
		imageSource: 'IMDB Commons',
		movies: ['The Man who Cried','The Libertine','The Man who Cried','Nick of Time']
	},
	{
		name: 'Vin Diesel',
		imageUrl: 'images/actors/18.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Strays','The Iron Giant','Boiler Room']
	},
	{
		name: 'Mel Gibson',
		imageUrl: 'images/actors/19.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Bird on a wire','Ransom','The River']
	},
	{
		name: 'George Clooney',
		imageUrl: 'images/actors/20.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Criminal','The Jacket','Combat Academy	','Welcome to Collinhood']
	},
	{
		name: 'Scarlet Johanson',
		imageUrl: 'images/actors/21.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Fall','North','Just Cause','Manny & Lo','A good Woman']
	},
	{
		name: 'Sandra Bullock',
		imageUrl: 'images/actors/22.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Lucky chances','Bionic Slowdown','Loverboy']
	},
	{
		name: 'Megane Fox',
		imageUrl: 'images/actors/23.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Crimes of fashion','How to Lose Friends and Alienate People','Holiday in the sun']
	},
	{
		name: 'Nicole Kidman',
		imageUrl: 'images/actors/24.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Fur','The human Stain','The Killing of a sacred Deer','Dead Calm']
	},
	{
		name: 'Robert Downey Jr Davis Jr',
		imageUrl: 'images/actors/25.jpg',
		imageSource: 'IMDB Commons',
		movies: ['True Believer','Four','Soapdish','Johny be good','Gothika']
	},
	{
		name: 'Cameron Diaz',
		imageUrl: 'images/actors/26.jpg',
		imageSource: 'IMDB Commons',
		movies: ['The Newton Boys','Head Above water','She\'s the one']
	},
	{
		name: 'Katherine Heigl ',
		imageUrl: 'images/actors/27.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Critical Assembly','Bug buster','Caffeine','Valentine 2001']
	},
	{
		name: 'Robert de Niro',
		imageUrl: 'images/actors/28.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Taxi Driver (1976)','True Confessions','Machete','1900','Wag the Dog','Sleepers','New York, New York']
	},
	{
		name: 'Penelope Cruz',
		imageUrl: 'images/actors/29.jpg',
		imageSource: 'IMDB Commons',
		movies: ['The Greek Laberynth','The Rebel','Chromophobia']
	},
	{
		name: 'Adam Sandler',
		imageUrl: 'images/actors/30.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Top Five','Mixed Nuts','The Animal']
	},
	{
		name: 'Bruce Willis',
		imageUrl: 'images/actors/31.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Alpha Dog','Blind Date','Nobody\'s fool','In Country']
	},
	{
		name: 'Catherine Z Jones',
		imageUrl: 'images/actors/32.jpg',
		imageSource: 'IMDB Commons',
		movies: ['The return of the native','Christopher Columbus the discovery 1992','Dads Army']
	},
	{
		name: 'Emma Watson',
		imageUrl: 'images/actors/33.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Your voice in my head','This is the end','Noah','The Perks of Being a Wallflower']
	},
	{
		name: 'Antonio Banderas',
		imageUrl: 'images/actors/34.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Of Love and Shadows','Miami Rhapsody','Spy kids']
	},
	{
		name: 'Emilia Clarke',
		imageUrl: 'images/actors/35.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Shackled','Spike Island','Dom Hemingway']
	},
	{
		name: 'Jennifer Lawrence',
		imageUrl: 'images/actors/36.jpg',
		imageSource: 'IMDB Commons',
		movies: ['It´s what I do','Serena 2014','Winter\' Bone']
	},
	{
		name: 'Rachel McAdams',
		imageUrl: 'images/actors/37.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Sonic Sea','My name is Tanino','The little price']
	},
	{
		name: 'Elle Fanning',
		imageUrl: 'images/actors/38.jpg',
		imageSource: 'IMDB Commons',
		movies: ['The 20th Century Women','Teen Spirit','Ginger & Rosa']
	},
	{
		name: 'Natalie Portman',
		imageUrl: 'images/actors/39.jpg',
		imageSource: 'IMDB Commons',
		movies: ['True','Developing','Eating Animals']
	},
	{
		name: 'Blake Lively',
		imageUrl: 'images/actors/40.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Green Lantern','The town','Hick']
	},
	{
		name: 'Anne Hathaway',
		imageUrl: 'images/actors/41.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Barbie 2018','Love & Other Drugs','Get Smart','Don Peyote']
	},
	{
		name: 'Emma Stone',
		imageUrl: 'images/actors/42.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Paper Man','The Croods','Aloha']
	},
	{
		name: 'Ashley Tisdale',
		imageUrl: 'images/actors/43.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Amateur Night','A Bugs Life','Saving Santa']
	},
	{
		name: 'Dianna Agron',
		imageUrl: 'images/actors/44.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Bare','A Fuchsia Elephant','Skid Marks']
	},
	{
		name: 'Jennifer Aniston',
		imageUrl: 'images/actors/45.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Five 2011','Room 10','\'Til there was you']
	},
	{
		name: 'Julia Roberts',
		imageUrl: 'images/actors/46.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Mother Nature','Blood Red','Full Frontal']
	},
	{
		name: 'Jessica Alba',
		imageUrl: 'images/actors/47.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Honey 2003','Awake 2007','The Killer Inside Me']
	},
	{
		name: 'Kate Beckinsale',
		imageUrl: 'images/actors/48.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Farming 2018','Haunted 1995','Uncovered','Tiptoes']
	},
	{
		name: 'Mila Kunis',
		imageUrl: 'images/actors/49.jpg',
		imageSource: 'IMDB Commons',
		movies: ['The latin Lover 2004','Piranha','Get Over It']
	},
	{
		name: 'Sophie Turner',
		imageUrl: 'images/actors/50.jpg',
		imageSource: 'IMDB Commons',
		movies: ['Another Me','The Thirtheenth Tale','Josie','Dark Phoenix']
	}
];

function getTurnmovies(actors) {
	return chain(actors)
		.reduce((movies, actor) => movies.concat(actor.movies), [])
		.shuffle()
		.slice(0, 4)
		.value();
}

export function getTurnData(actors) {
	const movies = getTurnmovies(actors);
	const answer = sample(movies);
	const actor = actors.find((a) => a.movies.includes(answer));

	return { movies, actor };
}
