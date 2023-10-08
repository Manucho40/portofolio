const InfosCv = ({ annees, poste, institution }) => {
  return (
    <div>
      <p
        style={{
          color: "#BCBCBC",
          opacity: "0.6",
          fontSize: 16,
          fontWeight: 500,
          marginBottom: 12,
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        {annees}
      </p>
      <p
        style={{
          fontSize: 18,
          color: "#fff",
          opacity: "0.9",
          marginBottom: 7,
        }}
      >
        {poste}
      </p>
      <p
        style={{
          color: "#BCBCBC",
          opacity: "0.6",
          fontSize: 16,
          fontWeight: 500,
          marginBottom: 12,
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        {institution}
      </p>
    </div>
  );
};

export default InfosCv;
