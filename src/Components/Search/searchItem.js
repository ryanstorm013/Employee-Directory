import React from 'react';

function SearchItem({filter, search}) {
    return (
    <form>
        <div className="form-group">
            <input
            type="input"
            className="form-control"
            id="formInput"
            placeholder="Search Employees"
            onChange={filter}>
            </input>
            
        </div>
        
    </form>
    );
}

export default SearchItem;