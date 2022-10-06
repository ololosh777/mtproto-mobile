import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex'
  },
  menu: {
    paddingVertical: 9,
    borderRadius: 5,
    marginTop: 60, 
    position: 'absolute', 
    width: '100%',
    display: 'flex',
    flex: 1
  },
  menuItem: {
    width: '100%',
    maxWidth: '100%'
  }
})