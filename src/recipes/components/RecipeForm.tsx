import { SetStateAction, useRef, useState } from "react";

export const RecipeForm = ({
	keyword,
	setKeyWord,
}: {
	keyword: string[];
	setKeyWord: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
	const [keyVal, setKeyVal] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	const handleKeyWord = (e: { preventDefault: () => void }) => {
		e.preventDefault();

		keyword.filter((k) => k.toLowerCase() === keyVal.toLowerCase()).length <=
			0 &&
			keyVal.trim() !== "" &&
			setKeyWord([...keyword, keyVal]);

		inputRef.current?.focus();
		setKeyVal("");
	};

	const handleChangeKeyword = (e: {
		target: { value: SetStateAction<string> };
	}) => {
		setKeyVal(e.target.value);
	};

	return (
		<>
			<h4 className="text-center">Agregar Keywords</h4>
			<div className="card mt-4">
				<div className="card-header">Keyword</div>
				<div className="card-body">
					<form className="container mt-4">
						<div className="mb-3">
							<label htmlFor="name" className="form-label">
								Nombre
							</label>
							<input
								type="text"
								ref={inputRef}
								className="form-control"
								id="name"
								value={keyVal}
								autoFocus
								onChange={handleChangeKeyword}
							/>
						</div>
						<div className="d-grid gap-2">
							<button
								type="submit"
								className="btn btn-primary"
								onClick={handleKeyWord}>
								Agregar
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};
