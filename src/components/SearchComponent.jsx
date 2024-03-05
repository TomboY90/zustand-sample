import React from 'react';

import { TodoStore } from "../store/TodoStore.js"

const SearchComponent = () => {
  const search = TodoStore(state => state.search);
  const actions = TodoStore(state => state.actions);

  return (
    <div style={{ height: '40px', marginTop: '50px' }}>
      <label htmlFor="my-input">
        Input Test :
      </label>
      <input style={{ width: '100%', height: '100%' }} name='my-input' type="text" value={search} onChange={(e) => actions.handleSearchInput(e.target.value)}/>
    </div>
  );
};

export default SearchComponent;
