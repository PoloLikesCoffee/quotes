import './scss/Style.scss';
import Header from './components/Header';
import Card from './components/Card';
import { useState, useEffect } from 'react';

function App() {
	const API = 'https://api.quotable.io/random';
	const [quote, setQuote] = useState();
	const [author, setAuthor] = useState();

	const getQuote = async () => {
		try {
			const response = await fetch(API);
			const data = await response.json();
			return data;
		} catch (error) {
			alert(error);
		}
	};

	useEffect(() => {
		getQuote().then((res) => {
			let newQuote = res.content;
			let newAuthor = res.author;
			// console.log(res);
			// console.log(newQuote);
			// console.log(newAuthor);
			setQuote(newQuote);
			setAuthor(newAuthor);
		});
	}, []);

	return (
		<div className="quotes-app">
			<Header />
			<Card quote={quote} author={author} />
		</div>
	);
}

export default App;
