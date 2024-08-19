export default function getStudentIdsSum(stud_arr) {
  return stud_arr.reduce((acc, student) => acc + student.id, 0);
}

