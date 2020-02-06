// global G2 settings
import { track, setTheme } from 'bizcharts';
import G2 from './G2';

const config = {
  defaultColor: '#1089ff',
  shape: {
    interval: {
      fillOpacity: 1
    }
  }
};

track(false);
setTheme(config);
export default G2;
