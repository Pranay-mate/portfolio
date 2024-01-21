import React from 'react';
import axios from 'axios';

class Leetcode extends React.Component {
  componentDidMount() {
    const body = {
      'operationName': 'userProblemsSolved',
      'query': "\n      query userProblemsSolved($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    problemsSolvedBeatsStats {\n      difficulty\n      percentage\n    }\n    submitStatsGlobal {\n      acSubmissionNum {\n        difficulty\n        count\n      }\n    }\n  }\n}\n      ",
      'variables': { 'username': "PranayMate" }
    };

    axios.post('https://leetcode.com/graphql/', body)
      .then(response => console.log(response))
      .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <div>
       PRANAY
      </div>
    );
  }
}

export default Leetcode;
