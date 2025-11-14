

f = open("universidades.xml","r")
f2 = open("universidades2.xml","w")
#txt = f.read()

for linea in f:
	linea = linea.strip()
	
	if len(linea) > 0 and linea[:4] != '<!--':
		print(linea)
		f2.write(linea)

f2.close()
f.close()
