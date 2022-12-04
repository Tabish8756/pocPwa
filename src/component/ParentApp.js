

const ParentApp = () => {
  const handleApp = () => {
    window.location.replace("https://elegant-kangaroo-0ab27b.netlify.app")
  };
  return (
    <div>
      <h1>Pwa Health</h1>
      <button onClick={handleApp}>Call back</button>
    </div>
  );
};
export default ParentApp;
