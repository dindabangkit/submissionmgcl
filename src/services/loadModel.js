const tf = require("@tensorflow/tfjs-node");

async function loadModel() {
	const modelPath = 'file:///mnt/c/Users/ASUS/submissionmgcl-dinda/submissions-model/model.json';
	console.log("Trying to load model from: ${modelPath}");

	try {
		const model = await tf.loadGraphModel(modelPath);
		console.log("Model loaded successfully");
	} catch (error) {
		console.error("Error loading model:", error);
		throw error;
	}

}

module.exports = loadModel;