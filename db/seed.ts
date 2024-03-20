import { db, User, Category, Todo } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	
	await db.insert(User).values([
		{
			id:"aña90@2",
			email:"alejoorosales@gmail.com",
			username:"alejo",

		},
		{
			id:"aaowd28?",
			email:"alejo@gmail.com",
			username:"alejo123",
		},
	]);

	await db.insert(Category).values([

		{
			id:"daowd12",
			label: "Software",
		},
		{
			id: "adiaojd81!2",
			label: "Marketing",
		},
	]);

	
	await db.insert(Todo).values([


			

	]);

}
