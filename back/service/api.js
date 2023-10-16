import dbConnection from "./dbConnection.js";

// récupérer un programme par son identifiant
const getProgrammeById = async (id) => {
	// requête
	const query = `
		SELECT Intergen.*
		FROM Intergen.programme
		WHERE programme.id = :id;
	`;

	try {
		const [results] = await dbConnection.execute(query, { id: id });
		return results.shift();
	} catch (error) {
		// renvoyer une erreur
		return error;
	}
};

export { getProgrammeById };
