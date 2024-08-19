export default function getListStudentIds(stud_arr) {
  if (!Array.isArray(stud_arr)) {
    return [];
  }
  return stud_arr.map((student) => student.id);
}
