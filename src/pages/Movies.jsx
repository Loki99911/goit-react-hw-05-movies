import { Outlet } from 'react-router-dom'; //Link,

export const Movies = () => {
  return (
    <main>
      <form>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
          // value={this.state.name}
          // onChange={this.formChange}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
      <Outlet />
    </main>
  );
};

//  <form className="SearchForm" onSubmit={this.formSubmit}>
//   <button type="submit" className="SearchForm-button ">
//     <span className="SearchForm-button-label">Search</span>
//   </button>
//   <input
//     className="SearchForm-input"
//     type="text"
//     autoComplete="off"
//     autoFocus
//     placeholder="Search images and photos"
//     value={this.state.name}
//     onChange={this.formChange}
//   />
// </form>;



// const firstUpdate = useRef(true);
// useLayoutEffect(() => {
//   if (firstUpdate.current) {
//     firstUpdate.current = false;
//     return;
//   });