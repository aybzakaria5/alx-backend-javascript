function updateStudentGradeByCity(students, city, newGrades) {
    return students
      .filter(student => student.location === city)
      .map(student => {
        const newGradeObj = newGrades.find(grade => grade.studentId === student.id);
        const grade = newGradeObj ? newGradeObj.grade : 'N/A';
        return { ...student, grade };
      });
  }
  
  export default updateStudentGradeByCity;
  