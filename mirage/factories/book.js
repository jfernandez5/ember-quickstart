import {Factory, faker} from 'ember-cli-mirage';

export default Factory.extend({
	title: faker.name.title,
	author() { 
		return faker.name.findName();
	},
	year: faker.date.past
});
