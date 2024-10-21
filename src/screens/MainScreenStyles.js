import { StyleSheet } from 'react-native';

const MainScreenStyles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
  },
  mainSection: {
    
    paddingHorizontal: 24,
    paddingTop: 50,
    paddingBottom: 80,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#1E1E1E',
    fontSize: 72,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    color: '#757575',
    fontSize: 32,
    fontWeight: '400',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32,
  },
  buttonIngresar: {
    flex: 1,
    height: 40,
    padding: 12,
    backgroundColor: '#E3E3E3',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#767676',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  buttonRegistrar: {
    flex: 1,
    height: 40,
    padding: 12,
    backgroundColor: '#2C2C2C',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#2C2C2C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextIngresar: {
    color: '#1E1E1E',
    fontSize: 16,
  },
  buttonTextRegistrar: {
    color: '#F5F5F5',
    fontSize: 16,
  },
 
});

export default MainScreenStyles;
