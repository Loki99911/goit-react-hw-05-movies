// import { Outlet } from 'react-router-dom'; //Link,
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
const [searchParams, setSearchParams] = useSearchParams();

  const submitForm = (event) => {
    event.preventDefault();
    console.log(event.target.elements.query.value);
    setSearchParams({query:event.target.elements.query.value})
   }



  return (
    <main>
      <form onSubmit={submitForm}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
          name="query"
          // value={this.state.name}
          // onChange={this.formChange}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
      <ul></ul>
    </main>
  );
};

// export const App = () => {
//   const [name, setName] = useState('');
//   const [imgArr, setImgArr] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalImg, setTotalImg] = useState(0);
//   const [loaderOn, setLoaderOn] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [largeImg, setLargeImg] = useState('');
//   const [text, setText] = useState('');

//   useEffect(() => {
//     if (!name) {
//       return;
//     }
//     setLoaderOn(true);
//     apiGet(name, page)
//       .then(data => {
//         if (data.hits.length === 0) {
//           toast.error(`Sorry((( Nothing found for your request "${name}" `);
//         }
//         setImgArr(PrevImgArr => {
//           return [...PrevImgArr, ...data.hits];
//         });
//         setTotalImg(data.total);
//       })
//       .catch(error => toast.error(`${error.massage}`))
//       .finally(() => setLoaderOn(false));
//   }, [name, page]);

//   const handleSubmit = name => {
//     setName(name);
//     setImgArr([]);
//     setPage(1);
//   };

//   const changePage = () => {
//     setPage(prevPage => prevPage + 1);
//   };

//   const toggleModal = (largeImg, text) => {
//     setShowModal(!showModal);
//     setLargeImg(largeImg);
//     setText(text);
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: '100%',
//         fontSize: 16,
//         color: 'red',
//       }}
//     >
//       <Searchbar onSubmitForm={handleSubmit} />
//       <ToastContainer position="top-center" autoClose={3000} theme="light" />
//       <ImageGallery imgArr={imgArr} funcToggle={toggleModal} />
//       {loaderOn && <Loader />}
//       {imgArr.length < totalImg && !loaderOn && <Button page={changePage} />}
//       {showModal && (
//         <Modal url={largeImg} text={text} funcCloseClick={toggleModal} />
//       )}
//     </div>
//   );
// };



// const firstUpdate = useRef(true);
// useLayoutEffect(() => {
//   if (firstUpdate.current) {
//     firstUpdate.current = false;
//     return;
//   });