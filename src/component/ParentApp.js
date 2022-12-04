

const ParentApp = () => {
  const handleApp = () => {
    window.location.replace("https://master--joyful-macaron-6478b6.netlify.app/")
  };
  return (
    <div>
      <h1>Abha Pwa App</h1>
      <button onClick={handleApp}>Call back</button>
    </div>
  );
};
export default ParentApp;
