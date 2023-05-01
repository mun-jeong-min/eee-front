const Search = () => {
  return (
    <div className='App'>
      <div>
        <p className='searchP'>검색</p>
        <p>카테고리를 입력하세요</p>
        <div className='search'>
          <input className='searchInput' type='text' />
          <button>X</button>
          <button>v</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
