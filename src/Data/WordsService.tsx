import { portugueseWords } from "./words/portuguese";

class WordsService {
	static getRandom = (): string => {
		const min = 0; 
		const max = portugueseWords.length;
		const rndIndex = Math.floor(Math.random() * (max - min + 1) + min);

		return portugueseWords[rndIndex];
	};
}

export default WordsService;
