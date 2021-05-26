import { StyleSheet, Dimensions } from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  carouselContainer: {
    minHeight: 250
  },
  carousel: {},

  image: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: 250
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    width: viewportWidth,
    height: 250
  },
  paginationContainer: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
    paddingVertical: 8,
    marginTop: 200
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 0
  },
  infoRecipeContainer: {
    flex: 1,
    margin: 25,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  recipeTitleContainer:{
    borderBottomWidth: 3,
    borderBottomColor: 'rgba(0,0,0,0.5)',
    width: '100%',
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  infoText: {
    marginTop: 30,
    paddingBottom: 30,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderTopColor: 'rgba(0,0,0,0.05)',
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  infoPhoto: {
    height: 20,
    width: 20,
    marginRight: 0
  },
  infoRecipe: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 5,
    color: 'rgba(0,0,0,0.6)'
  },
  category: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: 10,
    color: 'crimson',
  },
  infoDescriptionRecipe: {
    textAlign: 'left',
    fontSize: 14,
    marginTop: 30,
    margin: 8,
    letterSpacing:0.5,
    lineHeight:28,
    color: 'rgba(0,0,0,0.4)'
  },
  infoRecipeName: {
    borderTopWidth: 1,
    borderTopColor: 'green',
    fontSize: 28,
    margin: 10,
    fontWeight: 'bold',
    color: '#1B1B1B',
    textAlign: 'center'
  }
});

export default styles;
