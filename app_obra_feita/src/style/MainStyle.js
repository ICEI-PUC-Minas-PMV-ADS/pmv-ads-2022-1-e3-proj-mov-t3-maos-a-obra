import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  containerLogo: {
    flex: 1,
    paddingTop: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50,
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnSubmit: {
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  submitText: {
    color: '#FFF',
    fontSize: 18,
  },
  btnRegister: {
    marginTop: 10,
  },
  registerText: {
    color: '#000000',
  },
  cadastroText: {
    borderBottomColor: '#000000',
    borderBottomWidth: 2,
    width:'90%',
    fontWeight:"bold",
    padding: 12,
  },
  inputCadastro:{
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 10,
    fontSize: 16,
    width: '90%', 
  },
  containerInicial:{
    flex:1,
  },
  containerLogoInicial:{
    flex:1,
    justifyContent: 'center',
    aligntitems: 'center',
    marginTop: '10%'
  },
  containerForm:{
    flex:2,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: '5',
    paddingStart: '15%',
    paddingEnd: '5%'
    
  },
  text:{
    fontSize: 24,
    paddingStart: '10%',
    paddingEnd: '5%',
    marginTop: '8%'
  },
  button1:{
    position: 'absolute',
    backgroundColor: '#dcdcdc',
    borderRadius: 20,
    paddingVertical: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
    alignSelf: 'center',
    bottom: '15%',
    marginEnd: '5%',
    marginStart: '5%',
    fontWeight: 'bold', 
  },

  button2:{
    position: 'absolute',
    backgroundColor: '#dcdcdc',
    borderRadius: 20,
    paddingVertical: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
    alignSelf: 'center',
    bottom: '35%',
    marginEnd: '5%',
    marginStart: '5%',
    fontWeight: 'bold', 
  },
  buttonText: {
    fontSize: 20,
    color: '#000000',
    fontWeight:"bold",
  }
});

export default styles;
