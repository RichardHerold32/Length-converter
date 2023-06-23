var input = document.getElementById('input');
var result= document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from,option_to;

// now add listener
input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

// taking initial value
option_from = inputType.value;
option_to   = resultType.value;


function myResult(){


// when we change the input and output type vale we need to updata the 
// option_from and option_to

	option_from = inputType.value;
	option_to = resultType.value;


// now compare the input and resultType value and add formula
if (option_from === "meter" && option_to === "Centimeter") {
    // Meter to Centimeter conversion formula
    result.value = Number(input.value) * 100;
  } else if (option_from === "meter" && option_to === "millimeter") {
    // Meter to millimeter conversion formula
    result.value = Number(input.value) * 1000;
  } else if (option_from === "meter" && option_to === "kilometer") {
    // Meter to kilometer conversion formula
    result.value = Number(input.value) / 1000;
  } else if (option_from === "meter" && option_to ==="foot") {
    // Meter to  "foot conversion formula
    result.value = Number(input.value) * 3.281;
  } else if (option_from === "meter" && option_to === "yard") {
    // Meter to yard conversion formula
    result.value = Number(input.value) * 1.094;
  } else if (option_from === "meter" && option_to === "inch") {
    // Meter to inch conversion formula
    result.value = Number(input.value) * 39.37;
  } else if (option_from === "meter" && option_to === "nanometer") {
    // Meter to nanometer conversion formula
    result.value = Number(input.value) * 1000000000;
  } else if (option_from === "meter" && option_to === "decimeter") {
    // Meter to decimeter conversion formula
    result.value = Number(input.value) * 10;
  } else if (option_from === "meter" && option_to === "meter") {
    // Meter to meter conversion
    result.value = input.value;
  }
  

  if (option_from === "kilometer" && option_to === "meter") {
    // Kilometer to meter conversion formula
    result.value = Number(input.value) * 1000;
  } else if (option_from === "kilometer" && option_to === "Centimeter") {
    // Kilometer to Centimeter conversion formula
    result.value = Number(input.value) * 100000;
  } else if (option_from === "kilometer" && option_to === "millimeter") {
    // Kilometer to millimeter conversion formula
    result.value = Number(input.value) * 1000000;
  } else if (option_from === "kilometer" && option_to ==="foot") {
    // Kilometer to  "foot conversion formula
    result.value = Number(input.value) * 3281;
  } else if (option_from === "kilometer" && option_to === "yard") {
    // Kilometer to yard conversion formula
    result.value = Number(input.value) * 1094;
  } else if (option_from === "kilometer" && option_to === "inch") {
    // Kilometer to inch conversion formula
    result.value = Number(input.value) * 39370;
  } else if (option_from === "kilometer" && option_to === "nanometer") {
    // Kilometer to nanometer conversion formula
    result.value = Number(input.value) * 1000000000000;
  } else if (option_from === "kilometer" && option_to === "decimeter") {
    // Kilometer to decimeter conversion formula
    result.value = Number(input.value) * 10000;
  } else if (option_from === "kilometer" && option_to === "kilometer") {
    // Kilometer to kilometer conversion
    result.value = input.value;
  }
  

  if (option_from === "Centimeter" && option_to === "meter") {
    // Centimeter to meter conversion formula
    result.value = Number(input.value) / 100;
  } else if (option_from === "Centimeter" && option_to === "millimeter") {
    // Centimeter to millimeter conversion formula
    result.value = Number(input.value) * 10;
  } else if (option_from === "Centimeter" && option_to === "kilometer") {
    // Centimeter to kilometer conversion formula
    result.value = Number(input.value) / 100000;
  } else if (option_from === "Centimeter" && option_to === "foot") {
    // Centimeter to "foot conversion formula
    result.value = Number(input.value) / 30.48;
  } else if (option_from === "Centimeter" && option_to === "yard") {
    // Centimeter to yard conversion formula
    result.value = Number(input.value) / 91.44;
  } else if (option_from === "Centimeter" && option_to === "inch") {
    // Centimeter to inch conversion formula
    result.value = Number(input.value) / 2.54;
  } else if (option_from === "Centimeter" && option_to === "nanometer") {
    // Centimeter to nanometer conversion formula
    result.value = Number(input.value) * 10000000;
  } else if (option_from === "Centimeter" && option_to === "decimeter") {
    // Centimeter to decimeter conversion formula
    result.value = Number(input.value) / 10;
  } else if (option_from === "Centimeter" && option_to === "Centimeter") {
    // Centimeter to Centimeter conversion
    result.value = input.value;
  }
  


  if (option_from === "millimeter" && option_to === "meter") {
    // Millimeter to meter conversion formula
    result.value = Number(input.value) / 1000;
  } else if (option_from === "millimeter" && option_to === "Centimeter") {
    // Millimeter to Centimeter conversion formula
    result.value = Number(input.value) / 10;
  } else if (option_from === "millimeter" && option_to === "kilometer") {
    // Millimeter to kilometer conversion formula
    result.value = Number(input.value) / 1000000;
  } else if (option_from === "millimeter" && option_to === "foot") {
    // Millimeter to "foot conversion formula
    result.value = Number(input.value) / 304.8;
  } else if (option_from === "millimeter" && option_to === "yard") {
    // Millimeter to yard conversion formula
    result.value = Number(input.value) / 914.4;
  } else if (option_from === "millimeter" && option_to === "inch") {
    // Millimeter to inch conversion formula
    result.value = Number(input.value) / 25.4;
  } else if (option_from === "millimeter" && option_to === "nanometer") {
    // Millimeter to nanometer conversion formula
    result.value = Number(input.value) * 1000000;
  } else if (option_from === "millimeter" && option_to === "decimeter") {
    // Millimeter to decimeter conversion formula
    result.value = Number(input.value) / 100;
  } else if (option_from === "millimeter" && option_to === "millimeter") {
    // Millimeter to millimeter conversion
    result.value = input.value;
  }
  


    if (option_from === "foot" && option_to === "meter") {
        // Feet to meter conversion formula
        result.value = Number(input.value) / 3.2808;
      } else if (option_from === "foot" && option_to === "Centimeter") {
        // Feet to Centimeter conversion formula
        result.value = Number(input.value) * 30.48;
      } else if (option_from === "foot" && option_to === "millimeter") {
        // Feet to millimeter conversion formula
        result.value = Number(input.value) * 304.8;
      } else if (option_from === "foot" && option_to === "kilometer") {
        // Feet to kilometer conversion formula
        result.value = Number(input.value) * 0.0003048;
      } else if (option_from === "foot" && option_to === "yard") {
        // Feet to yard conversion formula
        result.value = Number(input.value.value) / 3;
      } else if (option_from === "foot" && option_to === "inch") {
        // Feet to inch conversion formula
        result.value = Number(input.value) * 12;
      } else if(option_from==="foot" && option_to==="foot"){
        //Feet to Feet conversion
        result.value = input.value;

      }if (option_from === "yard" && option_to === "meter") {
        // Yards to meter conversion formula
        result.value = Number(input.value) / 1.0936;
      } else if (option_from === "yard" && option_to === "Centimeter") {
        // Yards to Centimeter conversion formula
        result.value = Number(input.value) * 91.44;
      } else if (option_from === "yard" && option_to === "millimeter") {
        // Yards to millimeter conversion formula
        result.value = Number(input.value) * 914.4;
      } else if (option_from === "yard" && option_to === "kilometer") {
        // Yards to kilometer conversion formula
        result.value = Number(input.value) / 1093.6;
      } else if (option_from === "yard" && option_to === "foot") {
        // Yards to  "foot conversion formula
        result.value = Number(input.value) * 3;
      } else if (option_from === "yard" && option_to === "inch") {
        // Yards to inch conversion formula
        result.value = Number(input.value) * 36;
      
      }else if (option_from === "yard" && option_to === "nanometer") {
       // Yard to nanometer conversion formula
         result.value = Number(input.value) * 914400000;
      } else if (option_from === "yard" && option_to === "decimeter") {
      // Yard to decimeter conversion formula
        result.value = Number(input.value) * 9.144;
      } else if (option_from === "yard" && option_to === "yard") {
        // Yards to yard conversion
        result.value = input.value;

      }if (option_from === "inch" && option_to === "meter") {
        // Inches to meter conversion formula
        result.value = Number(input.value) / 39.37;
      } else if (option_from === "inch" && option_to === "Centimeter") {
        // Inches to Centimeter conversion formula
        result.value = Number(input.value) * 2.54;
      } else if (option_from === "inch" && option_to === "millimeter") {
        // Inches to millimeter conversion formula
        result.value = Number(input.value) * 25.4;
      } else if (option_from === "inch" && option_to === "kilometer") {
        // Inches to kilometer conversion formula
        result.value = Number(input.value) / 39370.079;
      } else if (option_from === "inch" && option_to === "foot") {
        // Inches to "foot conversion formula
        result.value = Number(input.value) / 12;
      } else if (option_from === "inch" && option_to === "yard") {
        // Inches to yard conversion formula
        result.value = Number(input.value) / 36;
      } else if (option_from === "inch" && option_to === "inch") {
        // Inches to inch conversion
        result.value = input.value;
      } else if (option_from === "inch" && option_to === "nanometer") {
       // Inches to nanometer conversion formula
        result.value = Number(input.value) * 25400000;
      } else if (option_from === "inch" && option_to === "decimeter") {
       // Inches to decimeter conversion formula
        result.value = Number(input.value) * 0.254;
      
      }if (option_from === "nanometer" && option_to === "meter") {
        // Nanometer to meter conversion formula
        result.value = Number(input.value) / 1000000000;
      } else if (option_from === "nanometer" && option_to === "Centimeter") {
        // Nanometer to Centimeter conversion formula
        result.value = Number(input.value) / 10000000;
      } else if (option_from === "nanometer" && option_to === "millimeter") {
        // Nanometer to millimeter conversion formula
        result.value = Number(input.value) / 1000000;
      } else if (option_from === "nanometer" && option_to === "kilometer") {
        // Nanometer to kilometer conversion formula
        result.value = Number(input.value) / 1000000000000;
      } else if (option_from === "nanometer" && option_to ==="foot") {
        // Nanometer to  "foot conversion formula
        result.value = Number(input.value) / 304800000;
      } else if (option_from === "nanometer" && option_to === "yard") {
        // Nanometer to yard conversion formula
        result.value = Number(input.value) / 914400000;
      } else if (option_from === "nanometer" && option_to === "inch") {
        // Nanometer to inch conversion formula
        result.value = Number(input.value) / 25400000;
      } else if (option_from === "nanometer" && option_to === "decimeter") {
        // Nanometer to decimeter conversion formula
        result.value = Number(input.value) / 100000000;
      } else if (option_from === "nanometer" && option_to === "nanometer") {
        // Nanometer to nanometer conversion
        result.value = input.value;

      }if (option_from === "decimeter" && option_to === "meter") {
        // Decimeter to meter conversion formula
        result.value = Number(input.value) / 10;
      } else if (option_from === "decimeter" && option_to === "Centimeter") {
        // Decimeter to Centimeter conversion formula
        result.value = Number(input.value) * 10;
      } else if (option_from === "decimeter" && option_to === "millimeter") {
        // Decimeter to millimeter conversion formula
        result.value = Number(input.value) * 100;
      } else if (option_from === "decimeter" && option_to === "kilometer") {
        // Decimeter to kilometer conversion formula
        result.value = Number(input.value) / 10000;
      } else if (option_from === "decimeter" && option_to ==="foot") {
        // Decimeter to  "foot conversion formula
        result.value = Number(input.value) / 3.048;
      } else if (option_from === "decimeter" && option_to === "yard") {
        // Decimeter to yard conversion formula
        result.value = Number(input.value) / 0.9144;
      } else if (option_from === "decimeter" && option_to === "inch") {
        // Decimeter to inch conversion formula
        result.value = Number(input.value) * 3.937;
      } else if (option_from === "decimeter" && option_to === "nanometer") {
        // Decimeter to nanometer conversion formula
        result.value = Number(input.value) * 100000000;
      } else if (option_from === "decimeter" && option_to === "decimeter") {
        // Decimeter to decimeter conversion
        result.value = input.value;
      }
    
    }
