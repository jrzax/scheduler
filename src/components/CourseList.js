import React, {useState} from 'react';
import { Button} from 'rbx';
import firebase from '../shared/firebase'
import Course from '../shared/Course/Course'
import {getCourseNumber, getCourseTerm, hasConflict} from '../shared/Course/times';

const terms = { F: 'Fall', W: 'Winter', S: 'Spring'}

const CourseList = ({ courses }) => {
  const [term, setTerm] = useState('Winter');
  const [selected, toggle] = useSelection();
  const termCourses = courses.filter(course => term === getCourseTerm(course));
  return (
  <React.Fragment>
    <TermSelector state = { {term, setTerm} }/>
    <Button.Group>
      { termCourses.map(course => <Course key={ course.id } course={ course } state= {{ selected, toggle}} />) }
    </Button.Group>
  </React.Fragment>
  );
};

const TermSelector = ({ state }) => (
  <Button.Group hasAddons>
  { Object.values(terms).map(value => <Button key={value}
      color = {buttonColor(value == state.term)}
      onClick = { () => state.setTerm(value)}>{ value }</Button>)
}
</Button.Group>
);

const buttonColor = selected => (
  selected ? 'success' : null
);

const useSelection = () => {
  const [selected, setSelected] = useState([]);
  const toggle = (x) => {
    setSelected(selected.includes(x) ? selected.filter(y => y !== x) : [x].concat(selected))
  };
  return [ selected, toggle ];
};


export default CourseList;
