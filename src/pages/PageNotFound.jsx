import NotFoundImage from "../assets/images/PageNotFound.jpg";

function PageNotFound() {
  return (
    <div className=" w-screen h-screen flex justify-center items-center bg-white">
      <img
        className="object-cover h-60 w-60 bg-red"
        src={NotFoundImage}
        alt="page-not-found"
      />
    </div>
  );
}

export default PageNotFound;
