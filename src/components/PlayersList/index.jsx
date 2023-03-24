import React from 'react';
import { useState } from 'react';
import "./index.css"
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const PlayersList = (props) => {

  const[tags,setTags] = useState([])

  const removeTags = indexToRemove => {
    setTags([...tags.filter((_,index)=> index !== indexToRemove)])
	props.selectedTags([...tags.filter((_,index)=> index !== indexToRemove)],"names");

  };
  const addTags = event => {
		if (event.target.value !== "") {
			setTags([...tags, event.target.value]);
			props.selectedTags([...tags, event.target.value],"names");
			event.target.value = "";
		}
	};
 

  return (
    <div className="tags-input">
			<ul id="tags">
				{tags.map((tag, index) => (
					<li key={index} className="tag">
						<span className='tag-title'>{tag}</span>
						<span className='tag-close-icon'
							onClick={() => removeTags(index)}
						>
							<RemoveCircleOutlineIcon/>
						</span>
					</li>
				))}
			</ul>
      <input
				type="text"
				onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
				placeholder="Press enter to add PLAYERS..."
			/>
      
      
    </div>
  );
};

export default PlayersList;