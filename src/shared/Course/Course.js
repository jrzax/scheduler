import { getCourseNumber, getCourseTerm, hasConflict, timeParts } from './times';
import React from 'react';
import { Button} from 'rbx';
import firebase from '../firebase'

const days = ['M', 'Tu', 'W', 'Th', 'F'];
const db = firebase.database().ref();

const buttonColor = selected => (
  selected ? 'success' : null
);

const Course = ({ course, state }) => (
  <Button color ={ buttonColor(state.selected.includes(course)) }
    onClick = { () => state.toggle(course) }
    onDoubleClick={ () => moveCourse(course) }
    disabled = {hasConflict(course,state.selected)}>
    { getCourseTerm(course) } CS { getCourseNumber(course) }: { course.title }
  </Button>
);

const moveCourse  = course => {
  const meets = prompt('Enter new meeting data, in this format:', course.meets)
  if (!meets) return;
  const {days} = timeParts(meets);
  if (days) saveCourse(course, meets);
  else moveCourse(course);
};

const saveCourse = (course, meets) => {
  db.child('courses').child(course.id).update({meets}).catch(error => alert(error));
};

export default Course;
