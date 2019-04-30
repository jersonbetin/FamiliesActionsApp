import React from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Home = (props) => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome Home!</p>
      <button onClick={() => props.changePage()}>Go to about page</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us')
}, dispatch);

export default connect(null, mapDispatchToProps)(Home);