trainings.push(
    {
        name: "Javascript-Training",
        description: "Dieses Training hilft dir, den Basis-Funktionsumfang von Javascript zu meistern.",

        fragen: [
    {
        "typ"          : "text",
        "frage"        : `Javascript: How do you replace all d's in the string s with r's?`,
        "antwort-init" : `s = s.replace();`,
        "antwort"      : `s = s.replace(/d/g, "r");`,
    },
    
    
    /**
     * Fragen aus den Aufgaben von W3Schools.com
     * 
     * http://www.w3schools.com/js/js_arithmetic.asp
     */
    {
        "typ"          : "text",
        "frage"        : `Display the sum of 10 + 5, using two variables x and y.`,
        "antwort-init" : `<!DOCTYPE html>
<html>
<body>

<p id="demo">Display the result here.</p> 

<script>
var x;
var y;
</script>

</body>
</html>
`,
        "antwort"      : `<!DOCTYPE html>
<html>
<body>

<p id="demo">Display the result here.</p> 

<script>
var x;
var y;
x = 10; 
y = 5; 
document.getElementById("demo").innerHTML = x+y; 
</script>

</body>
</html>
`,
    },    
    
]});