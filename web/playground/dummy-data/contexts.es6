import createApp from '../../../create-app';
import i from 'seamless-immutable';
import projects from '../../../projects/dummy-data';

export default i({
  '10000cinematicflights.com.dev:3000': createApp({projects})
});
