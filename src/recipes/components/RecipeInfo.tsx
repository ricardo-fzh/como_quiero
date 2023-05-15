import RecipeInterface from "../interfaces/recipeInterface";

export const RecipeInfo = ({ keyword }: { keyword: string[] }) => {
	const removeAccents = (str: string) => {
		return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	};

	const sanitizeKeywords = keyword.map((k) =>
		removeAccents(k)
			.toLocaleLowerCase()
			.replace(/[^a-zA-Z0-9 ]/g, "")
	);
	const re = new RegExp(`${sanitizeKeywords.join("|")}`);

	const recipes: RecipeInterface[] = [
		{
			title: "Causa de salmón",
			ingredients: [
				"Papa",
				"Aceite",
				"Aceite oliva",
				"Limón",
				"Sal fina",
				"Pimienta",
				"Ají amarillo (pasta)",
				"Pescado (salmón)",
				"Cebolla",
				"Palta",
				"Mayonesa",
				"Perejil",
				"Aceituna negra",
				"Huevo",
				"Pimentón rojo",
			],
			description: `Cocinar las papas con cáscara en agua con sal. Pelarlas y prensarlas de manera que se forme un puré. Amasar y condimentar con sal, pimienta, limón, ají y aceite.
				Saltear el salmón en un sartén con aceite de oliva, sal y pimienta. Desmenuzar.
				Mezclar el salmón desmenuzado con la mitad de la mayonesa y la cebolla picada.
				En un molde (7 cm aprox de alto) poner una capa de puré con la mitad de la preparación. Añadir el salmón, tomate en rodajas, tajadas de palta, la mitad de la mayonesa y cubrir con el resto del puré.
				Llevar a refrigerar por una hora, luego voltear el molde y adornar con perejil, aceitunas picadas, huevo cocido picado, palta en tajadas (con unas gotas de limón para que no se pongan negras) y lo que queda de mayonesa y unas tiras de pimentón.`,
		},
	];

	return (
		<>
			<h4 className="text-center">Recetas</h4>
			<ul className="list-group mt-4">
				{recipes.map((recipe, i) => (
					<li className="list-group-item" key={i}>
						<strong>{recipe.title} </strong>
						<hr />

						<h6>Ingredientes:</h6>
						<ul>
							{recipe.ingredients.map((ingredient, k) => (
								<li key={k}>
									{removeAccents(ingredient)
										.toLowerCase()
										.replace(/[^a-zA-Z0-9 ]/g, "")
										.match(re) ? (
										<span className="text-danger">{ingredient}</span>
									) : (
										ingredient
									)}
								</li>
							))}
						</ul>

						<h6 className="mt-4">Preparación:</h6>
						<div>
							<ol>
								{recipe.description.split("\n").map((paragraph, j) => (
									<li key={j}>{paragraph}</li>
								))}
							</ol>
						</div>
					</li>
				))}
			</ul>
		</>
	);
};
