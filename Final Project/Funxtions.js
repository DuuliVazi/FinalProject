function hint() {
    var hinttext = "CHOOSE YOUR U AND V";
    confirm(hinttext);
}
function hint2() {
    var hinttext = "FACTOR OUT THE DENOMINATOR";
    confirm(hinttext);
}
function hint3() {
    var hinttext = "PICK A SOLID NUMBER AS YOUR SPLIT POINT";
    confirm(hinttext);
}
function hint4() {
    var hinttext = "PICK THE CORRECT TRIG SUBSTITUTION FORMULA";
    confirm(hinttext);
}
function answer() {
    document.write ("1. Your U should be x<sup>2</sup> and your V should be ∫e<sup>2x</sup> dx.<br><br> 2. Find derivative for U and antiderivative for V.<br><br> 3. Setup equation using parts formula uv- ∫ vdu.<br><br> 4. Re-do process and pick a new U and V until there are no integrals remaining.<br><br><br> THE ANSWER IS (2x<sup>2</sup>-2x+1) / (4) + c");

} 
function answer2() {
    document.write ("1. Your U should be x and your V should be ∫cos(x) dx.<br><br> 2. Find derivative for U and antiderivative for V.<br><br> 3. Setup equation using parts formula uv - ∫ vdu.<br><br> 4. Re-do process and pick a new U and V until there are no integrals remaining.<br><br><br> THE ANSWER IS xsin(x) + cos(x) + c");
}
function answer3() {
    document.write ("1. Factor denominator into x(x+3)(x-4).<br><br> 2. Split x(x+3)(x-4) into 3 separate fractions like such<br><br>∫(A/x)+(B/x+3)+(C/x-4).<br><br> 3. Find common denominators for all fractions.<br><br> 4. Set 2x+5 equal to common denominators.<br><br> 5. Align coefficients and solve for A, B, and C.<br><br> 6. Place each letter's value back into ∫(A/x)+(B/x+3)+(C/x-4).<br><br> 7. Solve each fraction's integral like such<br><br>∫(A/x)+∫(B/x+3)+∫(C/x-4).<br><br><br> THE ANSWER IS (-5ln|x|)/(12) - (ln|x+3|)/(21) + (13ln|x-4|)/(28)");
}
function answer4() {
    document.write ("1. Make 2 separate integrals with w=0 as the split points.<br><br> 2.Replace infinity symbols with variable of your choice.<br><br> 3. Solve the indefinite integral.<br><br> 4. Use limit laws when plugging in a and b values like such<br><br>f(a)-f(b)<br><br><br> THE ANSWER IS 0");
}
function answer5() {
    document.write ("1. Pick the correct trig substitution formula<br><br> 2. Since x=3secθ yields a negative inside square root, then you have to use x=3sinθ.<br><br> 3. Find derivative of formula and substitute all x-values with corresponding trig values.<br><br> 4. Fully simplify inside the integral then solve the integral.<br><br> 5. Use SOHCAHTOA and right triangle to convert theta values back to x values.<br><br><br> THE ANSWER IS -(√(9-x<sup>2</sup>)<sup>3</sup>)/(243x<sup>3</sup>) - (√(9-x<sup>2</sup>))/(81x) + c");
}





