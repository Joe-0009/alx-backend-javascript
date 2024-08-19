export default function getStudentsByLocation(stud_arr, city) {
  return stud_arr.filter((student) => student.location === city);
}
