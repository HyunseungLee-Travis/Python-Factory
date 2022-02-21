import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  padten: { padding: 10 },
  marginten: { margin: 10 },

  flexrow: { flexDirection: 'row' },
  title: { fontSize: 30 },
  text: { fontSize: 10 },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: { width: 100, height: 100 },
  back: { backgroundColor: 'rgba(0,0,0,0)' },
  progress: { position: 'absolute', width: '100%', height: 5, bottom: 0 },
  bar: {
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  icon: {
    position: 'absolute',
    backgroundColor: 'white',
    right: 0,
    bottom: 0,
  },
});

export default styles;