var c

c= true
for (var i=0; i < 5; i++) {
  console.log(i)
    
  if (c == true) {
    c='X'
    console.log( `Informe abaixo o resultado do procedimento de contato com o cliente:
                        (${c}) Contato com sucesso
                        (${c}) Contato com sucesso
                        (${c}) Contato com sucesso
                        `
                  )
  }
  else {
    console.log('Não deu certo')
  }
}
