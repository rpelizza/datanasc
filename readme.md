# Datanasc

**Arquivos necessários**

Insira em sua página o jQuery 1.12.4 e datanasc.min.js .




**Opções**

`idadeLimite` - X (Número que será responsável pela idade máxima. Por exemplo, se setarmos 80, estaremos dizendo ao input que o cliente que estará se cadastrando poderá ter no máximo 80 anos.)

`output` - Elemento que receberá as mensagens de erro.

`outputClass` - Classe do elemento responsável pelas mensagens de erro.

`colorOK` - Cor da borda do input, em hexadecimal, no caso da validação for válida.

`colorError` - Cor da borda do input, em hexadecimal, no caso da validação for inválida.




**Como utilizar**

Chame o elemento pelo ID ou classe, e utilize as opções acima.

As opções padrão são:

1. idadeLimite = 100
2. output = span
3. outputClass = alert
4. colorOK = #0acb0a
5. colorError = #f44336



**Exemplo de utilização**

```js
$('.datanasc').datanasc({
	'idadeLimite': 80,
	'output': 'div',
	'outputClass': 'alert',
	'colorOK': '#0acb0a',
	'colorError': '#f44336'
});
```

