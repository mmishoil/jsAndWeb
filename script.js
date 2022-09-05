var s = prompt("Введите через пробел значения");
var parsed = s.split(" ");

var result;

if(parsed[0] == "m" && parsed[2] == "ft")
{
    result = parsed[1]*3.28;
    document.write(result);
}
if(parsed[0] == "m" && parsed[2] == "in")
{
    result = parsed[1]*39.57;
    document.write(result);
}
if(parsed[0] == "cm" && parsed[2] == "in")
{
    result = parsed[1]*2.54;    
    document.write(result);
}
if(parsed[0] == "cm" && parsed[2] == "ft")
{
    result = parsed[1]*328;    
    document.write(result);
}
if(parsed[0] == "ft" && parsed[2] == "m")
{
    result = parsed[1]/3.28;
    document.write(result);
}
if(parsed[0] == "in" && parsed[2] == "m")
{
    result = parsed[1]/39.57;
    document.write(result);
}
if(parsed[0] == "in" && parsed[2] == "cm")
{
    result = parsed[1]/2.54;    
    document.write(result);
}
if(parsed[0] == "ft" && parsed[2] == "cm")
{
    result = parsed[1]/328;    
    document.write(result);
}
if(parsed[0] = "m" && parsed[2] == "cm")
{
    result = parsed[1]*100;    
    document.write(result);
}
if(parsed[0] = "сm" && parsed[2] == "m")
{
    result = parsed[1]/100;    
    document.write(result);
}
if(parsed[0] = "in" && parsed[2] == "ft")
{
    result = parsed[1]/12;    
    document.write(result);
}
if(parsed[0] = "ft" && parsed[2] == "in")
{
    result = parsed[1]*12;    
    document.write(result);
}


