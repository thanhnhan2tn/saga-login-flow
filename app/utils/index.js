import {browserHistory} from 'react-router';
// Little helper function to abstract going to different pages
export function forwardTo (location) {
  browserHistory.push(location);
}
