/*
    ===== Código de TypeScript =====
*/

function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}



@classDecorator
class MiSuperClase {
  public miPropiedad: string = 'ABC123';

  imprimir() {
      console.log('Hola Mundo');
  }
}


console.log( MiSuperClase );

const miClase = new MiSuperClase();



// @errors: 2339
// @experimentalDecorators


function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www.google.com";
    };
  }
  
  @reportableClassDecorator
  class BugReport {
    type = "report";
    title: string;
    
  
    constructor(t: string) {
      this.title = t;
    }
  }
  
  const bug = new BugReport("Needs dark mode");
  console.log(bug.title); // Prints "Needs dark mode"
  console.log(bug.type); // Prints "report"
  
  // Note that the decorator _does not_ change the TypeScript type
  // and so the new property `reportingURL` is not known
  // to the type system:
  //bug.reportingURL;