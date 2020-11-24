import React from 'react';
import { Spinner } from 'reactstrap';

const Loading = (props) => {
  return (
    <>
      <Spinner animation="border" role="status" />
    </>
  );
};

export default Loading;
