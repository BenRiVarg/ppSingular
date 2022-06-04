import logo from './logo.svg';
import './App.css';

function App() {

 


  function silabario(palabra){
    //cut all the string in array
    var iterador=0;
    for (var i=0; i<palabra.length; i++){
          let valor=palabra[i].codePointAt(0);  
          console.log(buscarVocal(valor));
         /*  if(!buscarVocal(valor)){ //Es consonante
              iterador=i; //Buscar próxima vocal
              let valAnt="";
             while(buscarVocal(palabra[iterador])){
                valAnt=palabra[iterador];
                iterador++;
              }
              console.log(valAnt);
          } */
      
    }
  }


function buscarVocal(valor){
  
  var busqueda=false;
  var letrasAsscci=[97,65,101,69,105,73,111,79,117,85];
  for (var i=0;letrasAsscci.length;i++){
    if(valor==letrasAsscci[i]){
      busqueda=true;
      //console.log("La letra es vocal");
      break;
      
    }

  }

  return busqueda;
}

silabario("Poniccraccio");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
