import { RecipeForm } from "../components/RecipeForm";
import { RecipeInfo } from "../components/RecipeInfo";
import { useState } from "react";

export const Recipes = () => {
	const [keyWords, setKeyWords] = useState<string[]>(["papa", "pimienta"]);

	return (
		<div className="container mt-5">
			<div className="row d-flex">
				<div className="col-12 col-md-4 mb-4">
					<RecipeInfo keyword={keyWords} />
				</div>
				<div className="col-12 col-md-4">
					<h4 className="text-center mt-4">Keywords</h4>
					<ul className="list-group mt-4">
						{keyWords.map((keyWord, i) => (
							<li className="list-group-item" key={i}>
								{keyWord}
							</li>
						))}
					</ul>
				</div>
				<div className="col-12 col-md-4 mt-4">
					<RecipeForm keyword={keyWords} setKeyWord={setKeyWords} />
				</div>
			</div>
		</div>
	);
};
