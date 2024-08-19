export default function updateStudentGradeByCity(stud_arr, city, newGrades) {
  return stud_arr
    .filter(student => student.location === city)
    .map(student => {
      let grade = newGrades.find(g => g.studentId === student.id);
      return { ...student, grade: (grade && grade.grade) || 'N/A' };
    });
}

