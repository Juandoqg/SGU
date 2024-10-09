import { StyleSheet } from 'react-native';


const MainScreenStyles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
  },/*
  header: {
    alignSelf: 'stretch',
    height: 110,
    width: 'all',
    padding: 32,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerIcon: {
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerIconInner: {
    width: 23.33,
    height: 35,
    borderWidth: 3.5,
    borderColor: '#1E1E1E',
  },*/
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
 /* image: {
    alignSelf: 'stretch',
    height: 400,
  },
  footer: {
    width: '100%',
    padding: 32,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#D9D9D9',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerColumn: {
    width: 300,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  footerIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerIconInner: {
    width: 23.33,
    height: 35,
    borderWidth: 3.5,
    borderColor: '#1E1E1E',
  },
  footerIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 24,
  },
  footerSquare: {
    width: 24,
    height: 24,
    backgroundColor: '#1E1E1E',
    marginHorizontal: 8,
  },
  footerRectangle: {
    width: 24,
    height: 18,
    backgroundColor: '#1E1E1E',
    marginHorizontal: 8,
  },
  footerTitle: {
    fontWeight: '600',
    fontSize: 16,
    color: '#1E1E1E',
    marginBottom: 10,
  },
  footerText: {
    fontWeight: '400',
    fontSize: 16,
    color: '#1E1E1E',
    marginBottom: 10,
  },*/
});

export default MainScreenStyles;
