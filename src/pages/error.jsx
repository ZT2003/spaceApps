import MainNav from "../components/mainNav";

function Error({ english, setEnglish }) {
  return (
    <>
      <MainNav english={english} setEnglish={setEnglish} />
      {
        (english)?
        <div id="dashboard">
        <h1>Error 404</h1>
        <p>The page you are looking for is not found</p>
      </div>
      :
      <div id="dashboard">
        <h1>خطأ 404</h1>
        <p>عذرًا لا يمكن العثور على الصفحة التي تبحث عنها</p>
      </div>
      }
    </>
  );
}

export default Error;
