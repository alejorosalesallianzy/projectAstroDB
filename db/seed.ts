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

		{
			id:"poadia2@",
			title: "Crear funcion de fecha",
			description:"Crear funcion que adapte las fechas",
			category_id: "daowd12",
			user_id: "aña90@2",
		},
		{
			id:"poeqejuaf?",
			title: "Crear anuncio",
			description:"Crear anuncio de los productos",
			category_id: "adiaojd81!2",
			user_id: "aaowd28?",
		},
		
	]);
}
