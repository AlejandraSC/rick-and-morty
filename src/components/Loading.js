import '../stylesheets/loading.scss';
import React from 'react';
import { Spinner } from 'reactstrap';

const Loading = () => {
  return (
    <>
      <Spinner animation="border" role="status" className="loading" />
    </>
  );
};

export default Loading;
