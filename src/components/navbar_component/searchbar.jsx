import { useEffect, useState } from "react";
import React from 'react';

const SearchbarComponent = () =>{
    const [input, setInput] = useState("");
    const [possibleMatches, setPossibleMatches] = useState([]);


    const fetchdata = (text) =>{
        fetch('http://localhost:3000/projects?'+ new URLSearchParams({group: text}),{
            method: 'GET',
            headers: {
                'Accept': 'application/json'
              }
        }).then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          }).then(result => {
            // Handle the JSON data received from api
            console.log(result);
            setPossibleMatches(result);
          })
          .catch(error => {
            console.error('Fetch Error:', error);
          });
    }

/**
 * changes the state of input and then makes an api call to get possible search matches 
 * @param {string} text 
 */
    const handlechange = (text) =>{
        setInput(text);
        fetchdata(text);
    }

/**
 * uses regex to look for matching string and then essentially replace that subtring in the string with new highlighted substring and then returns a new string  
 * @param {string} group 
 * @param {string} matchingSubstr 
 * @returns {string}
 */
    const searchText = (group,matchingSubstr) =>{
      if(matchingSubstr)
      {
        const regex = new RegExp(matchingSubstr, 'gi');
        const newText = group.replace(regex, `<mark class="highlight">$&</mark>`);
        return <span dangerouslySetInnerHTML={{ __html: newText }} />;
      }else
      {
        return group;
      }

    }

    /**
     * When we start displaying projects as headers and beneath them groups. we need to make sure
     * we only display each header once
     */
    let currentHeaders = [];
    /**
     * 
     * @param {string} header 
     * @returns 
     */
    const addHeader = (header) =>{ 
      currentHeaders.push(header);
      return header
    };
  
    const [selectedIndex,setSelectedIndex] = useState(-1);
    
    /**
     * checks which key has been pressed and based on that calculates which li/a tag should be marked as selected
     * @param {event} e 
     */
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex(prevIndex => Math.min(possibleMatches.length - 1, prevIndex + 1));
      } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex(prevIndex => Math.max(-1, prevIndex - 1));
      } else if (e.key === "Enter" && selectedIndex >= 0) {
          // Handle Enter key press on selected item
          window.location.href = possibleMatches[selectedIndex].url;
      }
  }
    
    return(
        <>
             <input className="form-control me-2 searchbar" 
              type="search"
              placeholder="Search" 
              aria-label="Search" 
              value={input} 
              onKeyDown={(event) => handleKeyDown(event)}
              onChange={(event) => handlechange(event.target.value)}/>

                <div className="list-group">
                  {possibleMatches.map((match,index)=>(
                    <React.Fragment key={index}>
                      {currentHeaders.includes(match.parent_name) ?
                       <a href="#" className={`list-group-item list-group-item-action border-0 groupText ${selectedIndex === index ? 'selectedItem' : ''}`}>
                        {searchText(match.name,input)}
                        </a>:
                       <>
                            <a href="#" className={`"list-group-item list-group-item-action border-0"${
                              selectedIndex === index ? 'selectedItem' : ''}`} onKeyDown={(event)=> handleKeyDown(event)}>
                              <img src={match.image} alt={match.image} className="imgSpecifications" />
                              <b className="projectHeader">{addHeader(match.parent_name)}</b>
                            </a>
                          <a href="#" className={`list-group-item list-group-item-action border-0 groupText  ${selectedIndex === index ? 'selectedItem' : ''}`}>
                            {searchText(match.name,input)}
                            </a>
                       </> }
                    </React.Fragment>
                  ))}
               </div>
        </>
    );
}

export default SearchbarComponent;