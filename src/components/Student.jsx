import Score from  './Score';
const Student = ({ studentInfo }) => {
    return (
      <div>
        <h2>{studentInfo.name}</h2>
        <p>{studentInfo.bio}</p>
        <h3>Scores:</h3>
        {studentInfo.scores.map((scoreObject) => (
          <Score date={scoreObject.date} score={scoreObject.score} />
        ))}
        <hr />
      </div>
    );
};
  
export default Student;