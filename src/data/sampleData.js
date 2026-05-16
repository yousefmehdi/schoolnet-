export const schedule = [
  { day: 'Sunday', time: '08:00', subject: 'Mathematics', teacher: 'Ms. Lina', room: 'A-102' },
  { day: 'Sunday', time: '09:30', subject: 'Physics', teacher: 'Mr. Omar', room: 'Lab 1' },
  { day: 'Monday', time: '08:00', subject: 'Arabic', teacher: 'Ms. Rania', room: 'B-204' },
  { day: 'Tuesday', time: '10:15', subject: 'English', teacher: 'Mr. Karim', room: 'A-201' },
];

export const grades = [
  { subject: 'Mathematics', first: 88, second: 91, final: 94 },
  { subject: 'Physics', first: 82, second: 86, final: 89 },
  { subject: 'Arabic', first: 93, second: 90, final: 95 },
  { subject: 'English', first: 85, second: 87, final: 90 },
];

export const events = [
  { type: 'Exam', title: 'Physics Midterm', date: '2026-05-22' },
  { type: 'Holiday', title: 'National Holiday', date: '2026-05-25' },
  { type: 'Trip', title: 'Science Museum Visit', date: '2026-06-02' },
  { type: 'Announcement', title: 'Parent meeting week starts', date: '2026-06-08' },
];

export const people = {
  students: 420,
  teachers: 38,
  staff: 16,
  newAdmissions: 24,
};

export const financialRecords = [
  { id: 'REC-1001', student: 'Nour Ahmad', type: 'Tuition', amount: 450, status: 'Paid', date: '2026-05-10' },
  { id: 'REC-1002', student: 'Adam Saleh', type: 'Transport', amount: 80, status: 'Paid', date: '2026-05-11' },
  { id: 'REC-1003', student: 'Sara Ali', type: 'Tuition', amount: 450, status: 'Due', date: '2026-05-14' },
  { id: 'REC-1004', student: 'Maya Hassan', type: 'Activity', amount: 35, status: 'Paid', date: '2026-05-15' },
];

export const attendance = [
  { student: 'Nour Ahmad', absences: 1, grade: 94 },
  { student: 'Adam Saleh', absences: 4, grade: 81 },
  { student: 'Sara Ali', absences: 0, grade: 97 },
  { student: 'Maya Hassan', absences: 2, grade: 92 },
];
