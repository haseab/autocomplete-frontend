const Home = () => {
  return (
    <div>
      <iframe
        src="https://superfluous-lot-743348.framer.app/"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
          overflowY: "hidden",
        }}
      />
      <a
        href="#"
        className="button"
        style={{
          position: "fixed",
          bottom: "10px",
          right: "30px",
          width: "150px",
          height: "50px",
          backgroundColor: "rgb(36, 36, 36)",
        }}
      ></a>
    </div>
  );
};

export default Home;
