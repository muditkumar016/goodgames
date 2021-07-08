import React from 'react';

const Card= ({name, rating, image}) =>{
	return(
		<div className= 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow5'>
			<img src={image} alt='game' height='150px' width='250px'/>
			<div>
				<h2>{name}</h2>
				<p>{rating}</p>
			</div>
		</div>
	);
}

export default Card;