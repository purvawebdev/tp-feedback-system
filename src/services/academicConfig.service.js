export const getAcademicFilters = async () => {
  return {
    courses: ["All Courses", "MCA", "MBA"],
    years: ["All Years", "FY", "SY"],
    departments: ["All Departments", "Software Development", "Marketing"],
    subjects: ["All Subjects"],
    batches: ["All Batches", "2023-25", "2024-26"],
  };
};
