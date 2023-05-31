"use client";
import {university} from './university.json';
function MyForm() {
  const [university, setUniversity] = useState('');
  const [department, setDepartment] = useState('');

  // handle university change
  const handleUniversityChange = (event) => {
    setUniversity(event.target.value);
    setDepartment('');
  };

  // handle department change
  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  return (
    <form>
      <label>
        University:
        <select value={university} onChange={handleUniversityChange}>
          <option value="">Select a university</option>
          <option value="University of California">University of California</option>
          <option value="Stanford University">Stanford University</option>
          <option value="MIT">MIT</option>
          ...
        </select>
      </label>
      <label>
        Department:
        <select value={department} onChange={handleDepartmentChange} disabled={!university}>
          <option value="">Select a department</option>
          {university && universities[university].map(dept => <option key={dept} value={dept}>{dept}</option>)}
        </select>
      </label>
    </form>
  );
}
export default MyForm;