import React from 'react';
import Card from './Card';

const CardList= ({games}) =>{
	return (
		<div>
		{
			games.map((user, i) => {
				return (
					<Card
						key={i}
						name={games[i].name}
						rating={games[i].rating}
						image={games[i].image}
					/>
				);
			})
		}
		</div>
	);
}

export default CardList;