function bmiCalculator(weight,height){
    var bmi = Math.round(weight/(height*height));
    return bmi;
}





function fibonacciGenerator (n) {
    
        var output = [];
        if (n === 1){
            output = [0];
            
        }
        else if (n === 2){
            output = [0, 1];
            
        }
        else{
            for(var i=2; i<n; i++){
                output = [0, 1];
                output.push(output[i-2] + output[i-1]);
            }
        }
        return output;
        
}      

fibonacciGenerator(1);    