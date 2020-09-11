import React from 'react'
import CharaterItem from './charateritem'
import Loader from '../UI/loader'
const CharaterGrid = ({ items, isLoading}) => {

	return isLoading ? <Loader /> : <section className="cards">
		{items.map((item) => (
			<CharaterItem key={item.char_id} item={item}/>
			))}
	</section>

}

export default CharaterGrid