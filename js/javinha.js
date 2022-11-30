/* function vetor()
{
   var nome = [1,2,3];
   var tipo = nome[1]+nome[2];
   
   document.write(nome[0]); 
   
   
   for(var col=0;col<=3;col++)
   {
	  document.write(nome[col]+"<br>");
   }	    
}

function tabela()
{
	var numeros = [
	    [1,20,34],
		[95,5,10],
		[100,10,23]
	];
	document.write(numeros[0][2]);
	for(var col=0;col<=2;col++)
   {   
      for(var linha=0;linha<=2;linha++)
      {
	    document.write(numeros[linha]
		numeros[col]+"<br>");
	  }
    }
} */

function pesquisa()
{
	
	var frutas = document.
	getElementById("cxpesquisa").value;
	
	
	var frutaria = 
	 [
	  ['texto1','f1.jpg'],
	  ['texto2','f2.jpg'],
	  ['texto3','f3.jpg'],
	  ['texto4','f4.jpg'],
	  ['texto5','f5.jpg']
	];
 if(frutas == "Abacaxi")
 {
    document.write(frutaria[0][0]+"<br/>");	
	document.write("<img src='img/frutaria[0][1]'>");
 }
 else if(frutas == "Uva")
 {
	 document.write(frutaria[4][0]+"<br/>");	
	 document.write("<img src='img/"+frutaria[4][1]+" '/> ");
     
 }

}














	
	