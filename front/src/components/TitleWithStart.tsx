import star from "../assets/star.png";

const TitleWithStart = ({ title }: { title: string }) => {
  return (
    <div style={{ display: "flex" }}>
      <img
        src={star}
        alt=""
        width={50}
        height={50}
        style={{ marginTop: 10, marginRight: 5 }}
      />
      <h2
        style={{ fontFamily: "cursive" }}
        className="responsive-text animate__animated animate__flipInX animate__delay-1s"
      >
        {title}
      </h2>
      <img
        src={star}
        alt=""
        width={50}
        height={50}
        style={{ marginTop: 10, marginRight: 5 }}
      />
    </div>
  );
};

export default TitleWithStart;
