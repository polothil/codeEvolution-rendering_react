import React, { useState } from 'react';

const initState = {
  fname: 'Bruce',
  lname: 'Wayne',
};

const ObjectUseState = () => {
  const [person, setPerson] = useState(initState);

  const changeName = () => {
    person.fname = 'Clark';
    person.lname = 'Kent';
    // Object fails to Re-render on direct mutation. The person name has changed as shown by the log statement, but React doesn't re-render as the reference to the object hasn't changed
    setPerson(person);
    console.log({ person });

    // Alternative option that worked is by using the line below
    // setPerson({ ...person, fname: 'Clark', lname: 'Kent' });
  };

  console.log('ObjectUseState Render');

  return (
    <div>
      <button onClick={changeName}>
        {person.fname} {person.lname}
      </button>
    </div>
  );
};

export default ObjectUseState;
