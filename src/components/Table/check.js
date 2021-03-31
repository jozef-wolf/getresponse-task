const StudentTableElement = ({ students }) => {
  return students.map((student) => (
    <div key={student.id}>
      <Link to={`student/${student.id}`}>
        <div className="table__row">
          <div className="table__cell">{student.id}</div>
          <div className="table__cell">
            {student.name} {student.surname}
          </div>
          <div className="table__cell">{student.gender}</div>
          <div className="table__cell">{student.favouriteLesson}</div>
          <div className="table__cell">
            {format(Date.parse(student.absence), "dd MMMM yyyy", {
              locale: pl,
            })}
          </div>
          <div className="table__cell">{student.testPassed}</div>
          <div className="table__cell">
            {average(student.grades).toFixed(1)}
          </div>
        </div>
      </Link>
    </div>
  ));
};

export default StudentTableElement;
