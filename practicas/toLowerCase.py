"""
Convertir a minusculas el contenido del fichero
"""

def lowerFile(path, path2):
	fich=None
	fich2=None
	try:
		fich = open(path, "r")
		fich2 = open(path2, "w")
		
		txt = fich.read()
		txt2 = txt.lower()
		
		fich2.write(txt2)
		
	except Exception as e:
		print(e)
		
	finally:
		if fich: fich.close()
		if fich2: fich2.close()
	
	
ficheros = {'foro.dtd':'foro2.dtd', 'foro.xml':'foro2.xml'}
for r,w in ficheros.items():
	lowerFile(r,w)
	
