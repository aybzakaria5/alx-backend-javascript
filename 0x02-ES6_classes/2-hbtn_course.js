class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validateString(name, 'Name');
    this._length = this._validateNumber(length, 'Length');
    this._students = this._validateArray(students, 'Students');
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(name) {
    this._name = this._validateString(name, 'Name');
  }

  // Getter and setter for length
  get length() {
    return this._length;
  }

  set length(length) {
    this._length = this._validateNumber(length, 'Length');
  }

  // Getter and setter for students
  get students() {
    return this._students;
  }

  set students(students) {
    this._students = this._validateArray(students, 'Students');
  }

  // Validation function for string attribute
  _validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
    return value;
  }

  // Validation function for number attribute
  _validateNumber(value, attribute) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }

  // Validation function for array attribute
  _validateArray(value, attribute) {
    if (!Array.isArray(value)) {
      throw new TypeError(`${attribute} must be an array`);
    }
    return value;
  }
}

export default HolbertonCourse;
