on error resume next

Public Sub Grava(comp)
 Const ForAppending = 2
 '1 - Abra um arquivo somente para leitura. Você não pode gravar neste arquivo.
 '2 - Abra um arquivo para escrita.
 '8 - Abra um arquivo e grave no final do arquivo.

'Colocar o local onde irá salvar o log 
arq_ext = "c:\ANTENAACESSOLADOB.txt"
 Set fso = CreateObject("Scripting.FileSystemObject")
 Set arq_int = fso.OpenTextFile(arq_ext , ForAppending, true)
 arq_int.write (comp & vbcrlf)
 arq_int.close
End Sub

Public Sub Ping()

data = now()

'Colocar o IP que deseja realizar o PING
aMachines = ("172.31.49.177")

Set objPing = GetObject("winmgmts:{impersonationLevel=impersonate}")._
        ExecQuery("select * from Win32_PingStatus where address = '"& amachines & "'")
    
    For Each objStatus in objPing
     
      If IsNull(objStatus.StatusCode) or objStatus.StatusCode<>0 Then 
   
   result = ("ANTENA  ACESSO LADO B - OFFLINE - " & data)

   grava(result)
  
 else
 
   result = ("ANTENA  ACESSO LADO B - ONLINE - " & data)

   grava(result)
  
    
 
 end if 
 
 next
 
End Sub

Do
 While Counter < 2
  Ping()
  Counter = Counter + 1
'Definir de quanto em quanto tempo será executado, para cinco minutos alterar o valor abaixo para 300000
  wscript.sleep (5000)
 Wend
 Counter = 0
Loop Until Counter = 2