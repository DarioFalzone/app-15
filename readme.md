# WEEK 15
La problemática de la semana 15 consiste en crear test automatizados para la página
https://www.saucedemo.com/. Deberán crear los test siguiendo los lineamientos aprendidos en clase.

----------------------------------------------------------


✅ Changelog:

	# Fix 0.0.1:
	✔ Actualizacion de readme.md
	✔ Creacion de carpetas page obsjects / specs
	✔ Se da existencia a el test automatizado -> login page
	✔ Correcta configuracion de extensiones

----------------------------------------------------------

📄 INFORMACION UTIL

- ✔ WebDriverIO - Pagina oficial: (https://webdriver.io/docs/gettingstarted/)
- ✔ Pagina de testing: (https://www.saucedemo.com/)

----------------------------------------------------------

# Pasos a seguir para ejecutar los tests
	1 - Descargar repositorio
	2 - Ejecutar consola en carpeta
	3 - Tener instalado WDio y sus dependencias
	4 - npm run test
	5 - Se ejecutaran de manera automatica los test configurados por cada página

⊛ Page Objects:

		→ Pagina de login (login.page.js)
			- Input Email ✓
			- Input Passwod ✓
			- Error Text ✓
			- Boton Enviar ✓

		→ Menu (menu.section.js)
			- Boton Menu ✓
			- Boton Todos los Items ✓
			- Boton Sobre nosotros ✓
			- Boton Reset ✓
			- Boton Logout ✓

		→ Seccion de Contacto Redes (social.section.js)
			- Botones ✓
			- Links ✓

		→ Carrito de compra (shipping.start.js)
			- Botones ✓
			- Links ✓
			- Botones ✓
			- Links ✓

		→ End To End (e2e.js)
			- Test completo de la página ✓

----------------------------------------------------------

# Test realizados con WDio ⬇⬇⬇
	⊛ Página de login
		- Existencia de elementos (3)
		- Prueba de credenciales vacias
		- Prueba de credenciales erroneas
		- Prueba de credenciales correctas
		- Prueba de url post logueo ok

----------------------------------------------------------

# Pasos a seguir para resolver la problematica:
1) Crear un nuevo repositorio, instalar y configurar WebdriverIO.

2) Borrar todos los archivos innecesarios de WebdriverIO y organizar la estructura de carpetas correctamente.

3) Crear todos los test que sean necesarios para lograr cumplir con el objetivo de la
problemática. (Como guía pueden hacer al menos:
	a) Test del login con sus variantes - pass correcta e incorrecta, etc.;
	b) Test E2E (end to end): test de lo que haría un usuario desde que entra a la app hasta
	que sale (login, selecciona producto, va al carrito, compra y sale);
	c) Test de funcionamiento de secciones individuales de la página (carrito, productos,
	búsqueda, etc.).

4) Los test deben estar correctamente ordenados en ‘describe’ según secciones. Para eso es
importante crear archivos separados para distintos tipos de test. Un archivo para testear el
login, otro para el carrito, etc. ✓

5) Deben pasar todos correctamente y deben usar todas las herramientas explicadas (Page
Objet). También se pueden crear diferentes archivos ‘PageObject’ para cada archivo de test.

6) Además los selectores deben ser lo más exactos posibles (no usar el copy selector del
‘inspect’).

----------------------------------------------------------

## Authors ✒️

* [Dario Falzone](https://www.linkedin.com/in/darioflz/)

## Gratitude 🎁

* Many thanks to the RadiumRocket team for the opportunity to be a part. 🤓
